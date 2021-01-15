namespace mrsauravsahu.services.contracts
{
    public class PaginatedResult<T>
    {
        public T Data { get; set; }
        public long Count { get; set; }
        public long TotalCount { get; set; }
    }
}