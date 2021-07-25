## What is Data Validation?

Data validation is the process of checking whether a given value fits certain criteria based on its business requirements.

For any input - a UI input field or an API input body, data validation is crucial. Any arbitrary input should never be trusted. And data validation plays a vital role in making sure these inputs are rigorously funnelled through the right pipes before they create unintended side-effects in our applications.

## Data Validation in the JavaScript world

In JavaScript projects, both the browser and node.js, that is, there are several npm packages available to do data validation. I've personally used joi and yupjs.

joi was my goto choice for Data Validation for a long time. It worked really well with hapijs and has a great community around it. Trust me, I don't have anything against joi, it's just that I find yupjs to be more easier for me to work with.

yupjs is also a data validation library, and gets lots of its characteristics from joi but focuses more on client side validation and can be easily extended.

## An example of a Data Validation

Data validations are done on each property of an incoming "Data Transfer Object". Just a fancy way 🎓 of saying an object which is created from the raw inputs and passed along for cleaning and processing before actually getting stored or used in other places of an application.

Let's take a simple signup page example. We will have two inputs and the DTO will have the shape shown below: 

```tsx
type SignUpDto = {
  userName: string | undefined,
  password: string | undefined
}
```

Simple data validations here are:

- the userName and password fields are required
- userName should be of a maximum length of 12
- password should be a minimum length of 8

etc.

## Enter yupjs

To achieve this, yupjs uses a concept called as a schema for validation. I'm sure you'll find the yupjs library very similar to joi, so let's take a look. The simple validations for the userName and password can be written like shown below:

```tsx
import * as yup from 'yup'

type SignUpDto = {
  userName: string | undefined,
  password: string | undefined
}

const signUpSchema = yup.object({
  userName: yup
    .string()
    .required('please enter a username')
    .max(12),
  password: yup
    .string()
    .required('please enter a password')
    .min(8)
})
```

As you can see, you can define custom error message for each validation as well. Now this `signUpSchema` can be used to actually to the data validation, which is shown below:

```tsx
const signUp: SignUpDto = {
  userName: 'sample',
  password: undefined
}

signUpSchema.validate(signUp, { abortEarly: false })
  .then(console.log)
  .catch(console.error)

>
ValidationError: please enter a password
    at finishTestRun (.../node_modules/yup/lib/util/runTests.js:63:20)
    at .../node_modules/yup/lib/util/runTests.js:17:5
    at finishTestRun (.../node_modules/yup/lib/util/runTests.js:67:9)
    at .../node_modules/yup/lib/util/createValidation.js:72:127 {
  value: { userName: 'sample', password: undefined },
  path: undefined,
  type: undefined,
  errors: [ 'please enter a password' ],
  inner: [
    ValidationError: please enter a password
        at createError (/Users/sauravsahu/Documents/personal/code/yuppers/node_modules/yup/lib/util/createValidation.js:54:21)
        at /Users/sauravsahu/Documents/personal/code/yuppers/node_modules/yup/lib/util/createValidation.js:72:107 {
      value: undefined,
      path: 'password',
      type: 'required',
      errors: [Array],
      inner: [],
      params: [Object]
    }
  ]
}
```

As we can see, we get the detailed explanation as to why the validation failed in the `inner` property. I map over the `inner` property and keep only the path and value fields - this is enough for my frontend app to understand what localised message to show.

```tsx
signUpSchema.validate(signUp, { abortEarly: false })
  .then(console.log)
  .catch(err => {
    var validationErrors = err.inner.map((error: any) => ({ type: error.type, path: error.path }))
    console.error(JSON.stringify(validationErrors, undefined, 2))
  })

>
[
  {
    "type": "required",
    "path": "password"
  }
]
```

This is great, and yupjs has support for lots of different types of validations out-of-the-box, listed here - [yupjs API]([https://github.com/jquense/yup#api](https://github.com/jquense/yup#api))

## What is referential validation?

Unlike some validation rules which depend on just one key of a property, more complex validations could reference other properties as well. yupjs allows us to refer to other property of our DTO with `test` methods.

For our example, let's say we want to make sure the password doesn't contain the username as a string - meaning, if username is `sample`, password cannot be `123saMplE456` because the word sample appears in the sample. 

To validate this password, we need to refer to the username field as well. We can write this with the `test` method from yupjs. Let's modify our schema as shown below.

```tsx
const signUpSchema = yup.object({
   userName: yup
     .string()
     .required('please enter a username')
     .max(12),
   password: yup
     .string()
     .required('please enter a password')
     .min(8)
+    .test('contains-username', (password, context) => {
+      const { userName } = context.parent;
+      const userNameString = userName ?? '';
+      const containsUserName = (password ?? '').toLowerCase().includes(userNameString.toLowerCase())
+
+      return !containsUserName
+    })
 })
```

As you can see, I've added default values with the null coalescing operator as `userName` and `password` could be falsey.

Now if we try to validate our sample user, we get this validation error, which is exactly what we wanted.

```tsx
[
  {
    "type": "contains-username",
    "path": "password"
	}
]
```

For the `test` method, the first argument is the name of the validation, for us, it is `contains-username` and the second method is the actual test function which gets the current value and the context with which it is getting validated, and we can pick the `userName` with this context.

## Conclusion

yupjs is a very versatile data validation library. It can used in both the browser and in node.js. It has great in-built validators but also supports custom validation. Referential validation is a breeze and those methods can be easily unit-tested as well.

yupjs also contains casting methods to transform objects from one shape to other. I'm currently enjoying yupjs on the [Daily Vocab App](https://github.com/daily-vocab/daily-vocab) 

Have a great one! Keep on coding.

\- [mrsauravsahu](https://poly.work/mrsauravsahu)