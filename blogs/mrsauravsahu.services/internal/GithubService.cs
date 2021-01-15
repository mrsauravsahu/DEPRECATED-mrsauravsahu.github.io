using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using mrsauravsahu.services.contracts;
using mrsauravsahu.services.options;
using System.Dynamic;
using System.Linq;

namespace mrsauravsahu.services.integrations
{
    public class GithubService
    {
        private readonly HttpClient client;

        public GithubService(
            IOptions<GithubServiceOptions> githubOptions
        )
        {
            var httpClient = new HttpClient();
            httpClient.BaseAddress = new System.Uri("https://api.github.com");
            httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", githubOptions.Value.Token);
            httpClient.DefaultRequestHeaders.UserAgent.Add(new ProductInfoHeaderValue("mrsauravsahu", "0.0.1"));

            this.client = httpClient;
        }

        public async Task<List<JsonElement>> GetHighightedItemsAsync()
        {
            var body = new
            {
                query = @"{
                    viewer {
                        login
                        repositories(first: 100) {
                        nodes {
                            id
                            url
                            name
                            description
                            isFork
                            createdAt
                            repositoryTopics(first: 20) {
                            nodes {
                                topic {
                                name
                                }
                            }
                            }
                        }
                        }
                    }
                    }
                "
            };

            var requestBodyContent = new StringContent(
                JsonSerializer.Serialize(body),
                Encoding.UTF8,
                "application/json"
            );

            var response = await this.client.PostAsync("/graphql", requestBodyContent);
            var responseStream = await response.Content.ReadAsStreamAsync();
            var responseObject = await JsonSerializer.DeserializeAsync<JsonElement>(responseStream);

            var projects = responseObject
                .GetProperty("data")
                .GetProperty("viewer")
                .GetProperty("repositories")
                .GetProperty("nodes");

            var highlightedProjects = projects
                .EnumerateArray()
                .Where(repo =>
                {
                    var isForked = repo.GetProperty("isFork").GetBoolean();
                    if (!isForked)
                    {
                        var isHighlighted = repo
                            .GetProperty("repositoryTopics")
                            .GetProperty("nodes")
                            .EnumerateArray()
                            .Any(topic => topic.GetProperty("topic").GetProperty("name").ToString() == "highlighted");

                        return isHighlighted;
                    }

                    return false;
                })
                .ToList();

            return highlightedProjects;
        }
    }
}