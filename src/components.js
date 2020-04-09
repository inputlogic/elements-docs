export const components = [
  {
    "name": "@app-elements/avatar",
    "component": "Avatar",
    "description": "Display  avatar image. Falls back to initial.",
    "version": "1.1.1",
    "docs": [
      [
        "Usage",
        "```javascript\nimport Avatar from '@app-elements/avatar'\n\n<Avatar\n  src='path to your image'\n  fullName='John Smith'\n />\n```\n\n"
      ],
      [
        "Props",
        "| Prop                   | Type       | Default       | Description         |\n|------------------------|------------|---------------|---------------------|\n| **`className`**        | _String_   | `''`          | className given to top-level avatar-wrap div.\n| **`size`**             | _Number_   | `'100'`       | based on percent. sets relative size of avatar.\n"
      ]
    ]
  },
  {
    "name": "@app-elements/carousel",
    "component": "Carousel",
    "description": "Simple carousel with arrows and dot indicators.",
    "version": "1.2.3",
    "docs": [
      [
        "Usage",
        "```javascript\nimport Carousel from '@app-elements/carousel'\n\nconst items = ['fff', 'a7c', '09d', '411', '111']\n\n<Carousel withDots>\n  {items.map(hex => (\n    <Image\n      src={`http://www.placehold.it/400x300/${hex}/f44?text=${hex}`}\n      unloadedSrc={`http://www.placehold.it/400x300/eee/eee?text=Loading`}\n      style='width: 100%'\n    />\n  ))}\n</Carousel>\n```\n\n"
      ],
      [
        "Props",
        "| Prop                   | Type       | Default       | Description         |\n|------------------------|------------|------------|---------------------|\n| **`className`**        | _String_   | `'carousel-slide'` | className given to each slide element.\n| **`wrapperClass`**     | _String_   | `''`               | className given to top-level carousel div.\n| **`noNav`**            | _Boolean_  | `false`            | Set to `true` to skip rendering prev/next elements.\n| **`withDots`**         | _Boolean_  | `false`            | If `true`, renders indicator dots below slides.\n| **`active`**           | _Number_   | `0`                | The active slide, must be an index of one of the children.\n| **`tolerance`**        | _Number_   | `100`              | Tolerance for detecting touch swipes.\n| **`children`**         | _Array_    | _None_             | Each child is one of the slides in the Carousel.\n"
      ]
    ]
  },
  {
    "name": "@app-elements/dropdown",
    "component": "Dropdown",
    "description": "Simple dropdown menus.",
    "version": "3.0.2",
    "docs": [
      [
        "Usage",
        "```javascript\nimport Dropdown from '@app-elements/dropdown'\n\n<Dropdown uid='home-example'>\n  <p><button onClick={ev => store.setState({modal: 'ExampleModal'})}>Open Example Modal</button></p>\n  <p><button onClick={ev => showNotification({message: 'PIRATES!'})}>Pirates!</button></p>\n  <p>Classy Penguin</p>\n</Dropdown>\n```\n\n#"
      ],
      [
        "Custom Trigger",
        "```javascript\n// If you provide a Component or function for the Trigger prop,\n// it will be given the following props: `className='btn-dropdown' onClick={handleToggle}`\n// You will need to pass these props down, so the Dropdown functionality\n// works with your custom Trigger component.\n<Dropdown uid='home-example' Trigger={props => <MyTrigger {...props}>Custom Trigger</MyTrigger>}>\n```\n\n"
      ],
      [
        "Props",
        "| Prop                   | Type        | Default       | Description         |\n|------------------------|-------------|---------------|---------------------|\n| **`uid`**              | _String_    | _None_        | Unique identifier for the dropdown.\n| **`buttonText`**       | _String_    | `'Select'`    | Text displayed in the default button trigger for the Dropdown.\n| **`noWrapper`**        | _Boolean_   | `false`       | If `true`, will render `children` without any wrapping `div`s.\n| **`Trigger`**          | _Component_ | _None_        | Any provided Component will replace the default `button` trigger.\n| **`children`**         | _Array_     | _None_        | The elements to display when the Dropdown is open.\n"
      ]
    ]
  },
  {
    "name": "@app-elements/form",
    "component": "Form",
    "description": "Take the pain out of forms!",
    "version": "2.2.1",
    "docs": [
      [
        "Usage",
        "```javascript\nimport Form from '@app-elements/form'\nimport { routeTo } from '@app-elements/router'\n\nconst TextInput = ({ ...props }) =>\n  <input type='text' {...props} />\n\nconst Login = () => {\n  const formProps = {\n    name: 'LoginForm',\n    action: 'auth/login',\n    method: 'post',\n    noAuth: true,\n    initialData: {\n      username: 'example'\n    },\n    onSuccess: ({ token, userId }) => {\n      setState(\n        { token, userId }\n        () => routeTo('dashboard')\n      )\n    },\n    onFailure: (err) => {\n      console.log('onFailure', err)\n      setState({\n        notification: { status: 'failure', message: 'We were not able to log you in!' }\n      })\n    }\n  }\n\n  return (\n    <Form {...formProps}>\n      // Each form input requires a `name` prop. It will be the key set on the Form state.\n      // In this case, the form name is `LoginForm`, so:\n      //   {\n      //     LoginForm: {\n      //       email: '',\n      //       username: '',\n      //       password: ''\n      //     }\n      //   }\n      <TextInput name='email' />\n      <input isFormField name='username' />\n      <TextInput name='password' />\n      <button type='submit'>Login</button>\n    </Form>\n  )\n}\n\nexport default Login\n```\n\n`<Form />` will automatically iterate it's `children` and if any of them match a `formFieldNames` then it will automatically sync the data from that form input.\n\n```javascript\n// These are the component names that we will sync values\n// to our parent Form state.\nlet formFieldNames = [\n  'InputText',\n  'InputLocation',\n  'TextInput',\n  'TextArea',\n  'Checkbox',\n  'Select',\n  'Radio',\n  'Question',\n  'DatePicker',\n  'Slider'\n]\n```\n\nYou can also add additional field names:\n\n```javacript\nimport { addFieldNames } from '@app-elements/form'\n\naddFieldNames('MyCoolField', 'NeatoField', 'BurritoField')\n```\n\nOr add `isFormField` attribute:\n\n```javacript\nconst MyCustomInput => <input isFormField name='hello' />\n```\n\n```javacript\nimport { addFieldNames } from '@app-elements/form'\n\naddFieldNames('MyCoolField', 'NeatoField', 'BurritoField')\n```\n\nIn the future, we should probably just automatically sync all native web form elements (input, select, checkbox, textarea, etc.. 🤷‍♀️)\n\n#"
      ],
      [
        "Difference between `onSubmit` and `action, method, noAuth, onSuccess, onFailure`",
        "There are two main ways to use `Form`. The first is the more bare-bones `onSubmit`. When a user submits your form, if `onSubmit` was defined, it will be called with `{ hasError, errors, data, done }` and you are left to determine what you want to do with the potential `errors` or form `data`.\n\nThe second way, is a convience around sending the form data to an API endpoint. You define the endpoint via `action` (named after native web form attribute) as well as the `method`. And you define the `onSuccess` and `onFailure` callbacks.\n\nIn both cases, any provided `validations` are run. With `onSubmit` any failed validations will be contained in the `errors` object. With the `action` way, the API request will **not** be made if there are any failed validations.\n\n"
      ],
      [
        "Props",
        "| Prop                   | Type       | Default       | Description         |\n|------------------------|------------|---------------|---------------------|\n| **`name`**             | _String_   | _None_        | The name of the form. Will be used as the parent key in global state.\n| **`initialData`**      | _Object_   | _None_        | An object to prefill the form with. Each key should correspond to the name of a field.\n| **`validations`**      | _Object_   | _None_        | An object of field validations. Each key should match a field name and the value should be a function that accepts the current field value and return null if valid, or a string describing the error if invalid.\n| **`action`**           | _String_   | _None_        | URL to send form data to when submitted\n| **`method`**           | _String_   | _None_        | The HTTP method to use when sending data to the `action` URL\n| **`noAuth`**           | _Boolean_  | `false`       | If the request should *not* include auth token in the headers\n| **`onSuccess`**        | _Function_ | _None_        | The function to call if the request was successful, called with the JSON response from the server\n| **`onFailure`**        | _Function_ | _None_        | The function to call if the request failed, called with the caught error\n| **`onSubmit`**         | _Function_ | _None_        | If set, `{ action, method, noAuth, onSuccess, onFailure }` will be ignored. Instead, `onSubmit` will be called with `{ hasError, errors, data, done }` See below for more details\n\n#"
      ],
      [
        "onSubmit Props",
        "| Prop                   | Type       | Description         |\n|------------------------|------------|---------------------|\n| **`hasError`**         | _Boolean_  | Indicates if a validation error was found, offered as a convenience so you don't have to inspect `errors`\n| **`errors`**           | _Object_   | An object of any found errors. Each key will match the name of the offending field. The value will be the error.\n| **`data`**             | _Object_   | The form data! Each key is a name of a field, the value is the value given by the user.\n| **`done`**             | _Function_ | A function you can call to reset the form state. It has the signature `(errors = {}, values)`. You can pass in the existing errors, so they don't get reset. If `values` is null, then the `initialData` will be set again. If you wish to clear all values, pass an empty object: `done({}, {})`\n"
      ]
    ]
  },
  {
    "name": "@app-elements/helmet",
    "component": "Helmet",
    "description": "Basic Component to set title and meta tags in your HTML.",
    "version": "2.1.0",
    "docs": [
      [
        "Usage",
        "`Helmet` can be declared in your JSX many times. Each time, the result will be merged with the previous. It follows the order of your React tree, meaning the last (or \"most nested\") `Helmet` declared in your React tree will take precedence.\n\nSay, in your root Component:\n\n```javascript\nimport Helmet from '@app-elements/helmet'\n\n<Helmet\n  title='Welcome'\n  titleTemplate='PWA Starter | %s'\n  defaultTitle='Welcome'\n/>\n```\n\nThen, in some nested child Component:\n\n```javascript\n<Helmet\n  title='Nested Title'\n/>\n```\n\nThe resulting object representation would be:\n\n```json\n{\n  \"title\": \"Nested Title\",\n  \"titleTemplate\": \"PWA Starter | %s\",\n  \"defaultTitle\": \"Welcome\"\n}\n```\n\nThe `document.title` will be updated each time a Helmet instance is rendered. However, the meta tags are only rendered once (and still give precedence to the last `Helmet` in the tree). This means the meta tags are set properly on initial load and when rendering on the server. So, when you share a link on social media, the correct OG tags or other meta tags will be used. But, the meta tags will not update after initial load. From what I can tell, this has no negative affect.\n\n\n#"
      ],
      [
        "Server-Side Rendering",
        "You can see full working code in [PWA Starter](https://github.com/inputlogic/pwa-starter/blob/master/server/renderReact.js), but here are the key bits:\n\n```javascript\nimport render from 'preact-render-to-string'\n\nimport Helmet, {rewind} from '@app-elements/helmet'\n\nconst head = render(<Helmet {...rewind()} />).slice(5, -6) // slice off `<head>`, `</head>` tags\n\n// ...\napp.get('*', (req, res) => {\n  /// ...\n  res.send(`\n    <html lang=\"en\">\n      <head>\n        <base href=\"/\">\n        <meta charset=\"utf-8\">\n        <link rel=\"stylesheet\" href=\"./bundle.css\" />\n        ${head}\n      </head>\n      <body>\n        <div class='main-app-container'>${html}</div>\n        <script>window.__initial_store__ = ${JSON.stringify(state)};</script>\n        <script src=\"./bundle.js\"></script>\n      </body>\n    </html> \n  `) \n})\n```\n\n"
      ],
      [
        "Props",
        "| Prop                   | Type        | Default       | Description         |\n|------------------------|-------------|---------------|---------------------|\n| **`title`**            | _String_    | _None_        | The title to set. Will be used inside the `titleTemplate` string.\n| **`titleTemplate`**    | _String_    | `'%s'`        | Format your title strings. `%s` will be replaced with current title. Ex. `'%s | My Cool Site'`\n| **`defaultTitle`**     | _String_    | _None_        | The default value to replace `%s` with in your `titleTemplate`. Ex. `'Home'`\n| **`meta`**             | _Array_     | _None_        | An array of objects representing `<meta />` tags. Supports `name`, `property`, `content` attributes.\n"
      ]
    ]
  },
  {
    "name": "@app-elements/image",
    "component": "Image",
    "description": "",
    "version": "1.1.5",
    "docs": [
      [
        "Usage",
        "```javascript\nimport Image from '@app-elements/image'\n\n<Image\n  srcs={[\n    'http://www.placehold.it/200x150/eee/eee?text=Loading',\n    'http://www.placehold.it/400x300/f44/fff?text=MediumRes',\n    'http://www.placehold.it/800x600/44f/fff?text=HighRes'\n  ]}\n/>\n```\n\n"
      ],
      [
        "Props",
        "| Prop              | Type        | Default  | Description         |\n|-------------------|-------------|----------|---------------------|\n| **`srcs`**        | _Array_     | _None_   | An array of image URLs.\n"
      ]
    ]
  },
  {
    "name": "@app-elements/level",
    "component": "Level",
    "description": "Position all children on a level row.",
    "version": "1.0.3",
    "docs": [
      [
        "Usage",
        "```javascript\nimport Image from '@app-elements/level'\n\n<Level>\n  <button>One</button>\n  <button>Two</button>\n  <button>Three</button>\n</Level>\n```\n"
      ]
    ]
  },
  {
    "name": "@app-elements/interval",
    "component": "Interval",
    "description": "Call some function on an interval during the lifecycle of a component",
    "version": "1.0.4",
    "docs": [
      [
        "Usage",
        "```javascript\nimport Interval from '@app-elements/interval'\n\n<Interval function={() => console.log('hello')} interval={3000} >\n  <h1>Hi</h1>\n</Interval>\n```\n\n#"
      ],
      [
        "Real-word Example",
        "```javascript\n// dispatch(invalidate('<url>')) will force <url> to be fetched again.\n<Interval function={() => dispatch(invalidate('api/messages'))} interval={3000} >\n  <ListResource endpoint='api/messages' >\n    {W.map(message => <div>{message.body}</div>)}\n  </ListResource>\n</Interval>\n```\n\n"
      ],
      [
        "Props",
        "| Prop                   | Type        | Default    | Description         |\n|------------------------|-------------|------------|---------------------|\n| **`function`**         | _Function_  | _None_     | The function to call.\n| **`interval`**         | _Number_    | `3000`     | The interval in milliseconds to call the function.\n"
      ]
    ]
  },
  {
    "name": "@app-elements/file-upload",
    "component": "FileUpload",
    "description": "File upload component.",
    "version": "0.1.0",
    "docs": [
      [
        "Usage",
        "```javascript\nimport { DatePicker } from '@app-elements/date-picker'\n\n// DatePicker expects it's state to be controlled by a parent Component.\n// This will often mean we set and get the value of the DatePicker in our\n// global state, but for this example, we will handle the state in the\n// parent Component.\n\nfunction StatefulComponent () {\n  const [date, setDate] = useState()\n  \n  return (\n    <DatePicker\n      selectedDate={date}\n      {/* Storing Dates is dangerous as they are mutable, and more troublesome\n          when used for memoization or shallow compares. */}\n      onChange={day => setDate(day.getTime())}\n    />\n  )\n}\n```\n\n`DateRangePicker` is just slightly different:\n\n```javascript\nimport { DateRangePicker } from '@app-elements/date-picker'\n\nfunction StatefulComponent () {\n  const [start, setStart] = useState()\n  const [end, setEnd] = useState()\n  \n  const onDateRange = ({ startDate, endDate }) => {\n    if (startDate != null) {\n      setStart(startDate.getTime())\n    } else if (endDate != null) {\n      setEnd(endDate.getTime())\n    } else if (startDate == null && endDate == null) {\n      // If the user taps the existing startDate again, we\n      // clear the selections.\n      setStart(null)\n      setEnd(null)\n    }\n  }\n  \n  return (\n    <DateRangePicker\n      startDate={start}\n      endDate={end}\n      onChange={onDateRange}\n    />\n  )\n}\n```\n\nSometimes you'll want full control over the layout and style of the DatePicker. If that's the case, just pass in your custom component as a child of DatePicker or DateRangePicker.\n\n```javascript\nconst MyCustomDateRangePicker = (props) =>\n  <DateRangePicker {...props} />\n    {({month, monthString, year, onClickPreviousMonth, onClickNextMonth, dayHeaders, calendar, classNamesForDay, onClickDay}) => \n      <div>\n        {/* See `date-picker.js` for an example of what goes inside `div` */}\n      </div>\n    )}\n  </DateRangePicker>\n```\n\n"
      ],
      [
        "DatePicker",
        "| Prop                   | Type       | Default       | Description         |\n|------------------------|------------|---------------|---------------------|\n| **`weekStartDay`**     | _Number_   | `0`           | Day of the week to start on, `0` being Sunday. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)\n| **`selectedDate`**     | _Number_   | _None_        | The selected Date in ms, use `.getTime()` or `.valueOf()`. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)\n| **`onChange`**         | _Function_ | _None_        | Callback when user selects a day. Will be given a Date.\n\n\n#"
      ],
      [
        "DateRangePicker",
        "| Prop                   | Type       | Default       | Description         |\n|------------------------|------------|---------------|---------------------|\n| **`weekStartDay`**     | _Number_   | `0`           | Day of the week to start on, `0` being Sunday. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)\n| **`startDate`**        | _Number_   | _None_        | The selected start Date in ms, use `.getTime()` or `.valueOf()`. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)\n| **`endDate`**          | _Number_   | _None_        | The selected end Date in ms, use `.getTime()` or `.valueOf()`. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)\n| **`onChange`**         | _Function_ | _None_        | Callback when user selects a day. Will be given an object that may contain `startDate` and/or `endDate`.\n"
      ]
    ]
  },
  {
    "name": "@app-elements/date-picker",
    "component": "DatePicker",
    "description": "Simple calendar-style date-picker.",
    "version": "0.3.0",
    "docs": [
      [
        "Usage",
        "```javascript\nimport { DatePicker } from '@app-elements/date-picker'\n\n// DatePicker expects it's state to be controlled by a parent Component.\n// This will often mean we set and get the value of the DatePicker in our\n// global state, but for this example, we will handle the state in the\n// parent Component.\n\nfunction StatefulComponent () {\n  const [date, setDate] = useState()\n  \n  return (\n    <DatePicker\n      selectedDate={date}\n      {/* Storing Dates is dangerous as they are mutable, and more troublesome\n          when used for memoization or shallow compares. */}\n      onChange={day => setDate(day.getTime())}\n    />\n  )\n}\n```\n\n`DateRangePicker` is just slightly different:\n\n```javascript\nimport { DateRangePicker } from '@app-elements/date-picker'\n\nfunction StatefulComponent () {\n  const [start, setStart] = useState()\n  const [end, setEnd] = useState()\n  \n  const onDateRange = ({ startDate, endDate }) => {\n    if (startDate != null) {\n      setStart(startDate.getTime())\n    } else if (endDate != null) {\n      setEnd(endDate.getTime())\n    } else if (startDate == null && endDate == null) {\n      // If the user taps the existing startDate again, we\n      // clear the selections.\n      setStart(null)\n      setEnd(null)\n    }\n  }\n  \n  return (\n    <DateRangePicker\n      startDate={start}\n      endDate={end}\n      onChange={onDateRange}\n    />\n  )\n}\n```\n\nSometimes you'll want full control over the layout and style of the DatePicker. If that's the case, just pass in your custom component as a child of DatePicker or DateRangePicker.\n\n```javascript\nconst MyCustomDateRangePicker = (props) =>\n  <DateRangePicker {...props} />\n    {({month, monthString, year, onClickPreviousMonth, onClickNextMonth, dayHeaders, calendar, classNamesForDay, onClickDay}) => \n      <div>\n        {/* See `date-picker.js` for an example of what goes inside `div` */}\n      </div>\n    )}\n  </DateRangePicker>\n```\n\n"
      ],
      [
        "DatePicker",
        "| Prop                   | Type       | Default       | Description         |\n|------------------------|------------|---------------|---------------------|\n| **`weekStartDay`**     | _Number_   | `0`           | Day of the week to start on, `0` being Sunday. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)\n| **`selectedDate`**     | _Number_   | _None_        | The selected Date in ms, use `.getTime()` or `.valueOf()`. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)\n| **`onChange`**         | _Function_ | _None_        | Callback when user selects a day. Will be given a Date.\n\n\n#"
      ],
      [
        "DateRangePicker",
        "| Prop                   | Type       | Default       | Description         |\n|------------------------|------------|---------------|---------------------|\n| **`weekStartDay`**     | _Number_   | `0`           | Day of the week to start on, `0` being Sunday. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)\n| **`startDate`**        | _Number_   | _None_        | The selected start Date in ms, use `.getTime()` or `.valueOf()`. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)\n| **`endDate`**          | _Number_   | _None_        | The selected end Date in ms, use `.getTime()` or `.valueOf()`. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)\n| **`onChange`**         | _Function_ | _None_        | Callback when user selects a day. Will be given an object that may contain `startDate` and/or `endDate`.\n"
      ]
    ]
  },
  {
    "name": "@app-elements/lazy-load",
    "component": "LazyLoad",
    "description": "Won't render children until it's in viewport.",
    "version": "1.0.2",
    "docs": [
      [
        "Usage",
        "```javascript\nimport LazyLoad from '@app-elements/lazy-load'\n\n<LazyLoad>\n  <BigHeftyVideo />\n</LazyLoad>\n```\n"
      ]
    ]
  },
  {
    "name": "@app-elements/list-resource",
    "component": "ListResource",
    "description": "List an API resource with pagination.",
    "version": "2.1.5",
    "docs": [
      [
        "Usage",
        "```javascript\nimport ListResource from '@app-elements/list-resource'\n\nconst UserItem = ({ id, name, email }) =>\n  <div class='user-item'>\n    <h2><a href={`/users/${id}`}>{name}</a></h2>\n    <p>{email}</p>\n  </div>\n\nconst Users = () =>\n  <ListResource\n    endpoint='https://jsonplaceholder.typicode.com/users'\n    limit={10}\n    render={UserItem}\n  />\n\nexport default Users\n```\n\nThere is also a named export for rendering a single resource rather than a list.\n\n```javascript\nimport { Resource } from '@app-elements/list-resource'\n\nconst UserDetails = ({ id, name, email }) =>\n  <div>\n    <h1>{name}</h1>\n    <p>{email}</p>\n    <p><a href='/users'>&larr; Back to all Users</a></p>\n  </div>\n\n// `id` is passed as a prop from Router, representing the page id we are on:\n// `/users/:id`\nconst User = ({ id }) =>\n  <div key={`user-${id}`}>\n    <Resource\n      endpoint={`https://jsonplaceholder.typicode.com/users/${id}`}\n      render={UserDetails}\n      id={id}\n    />\n    {parseInt(id, 10) < 10 &&\n      <a href={`/users/${parseInt(id, 10) + 1}`}>Next</a>\n    }\n  </div>\n\nexport default User\n```\n\n"
      ],
      [
        "Props",
        "| Prop             | Type        | Default       | Description         |\n|----------------- |-------------|---------------|---------------------|\n| **`endpoint`**   | _String_    | _None_        | The url to call\n| **`limit`**      | _Number_    | _None_        | A convenience prop for setting `?limit=${limit}` on the `endpoint` url\n| **`render`**     | _Component_ | _None_        | The Component to render for each item in the response `results` array\n| **`pagination`** | _Boolean_   | `false`       | Should ListResource also render a `<Pagination />` component?\n"
      ]
    ]
  },
  {
    "name": "@app-elements/modal",
    "component": "Modal",
    "description": "Display modals from anywhere in your component tree.",
    "version": "3.1.1",
    "docs": [
      [
        "Usage",
        "First, you need to have a root dom node to render modals into. So inside your `<body>` add `<div id='modals' />`.\n\nThen, you need to define at least one modal. The only requirement is that the top-level element for your Component needs to be `<Modal />`:\n\n```javascript\nimport Modal from '@app-elements/modal'\n\nconst ExampleModal = () =>\n  <Modal>\n    <h1>Example Modal</h1>\n  </Modal>\n\nexport default ExampleModal\n```\n\nNow, you need to nest your `ExampleModal` in a `<Modals />` instance:\n\n```javascript\nimport { Modals } from '@app-elements/modal'\nimport ExampleModal from '/modals/example-modal'\n\nconst MainApp = () =>\n  <div>\n    <Router routes={routes} />\n    <Modals>\n      <ExampleModal />\n    </Modals>\n  </div>\n```\n\nYou can nest as many modals as you wish under a `<Modals />` instance, and Modals will figure out which, if any, of the modals it should render.\n\nTo show a modal, set the name in the global state:\n\n```javascript\nimport { setState } from '/store'\n\n// 'ExampleModal' matches up with the name of the modal variable.\nsetState({ modal: 'ExampleModal' })\n// For example, `const AnotherModal = () => <Modal>/* ... */</Modal>`\n// could be opened by calling `setState({ modal: 'AnotherModal' })`\n```\n\n"
      ],
      [
        "`<Modal />` Props",
        "| Prop                   | Type        | Default       | Description         |\n|------------------------|-------------|---------------|---------------------|\n| **`className`**        | _String_    | _None_        | A class name to be added on the `.modal-container` div\n| **`hideClose`**        | _Boolean_   | _false_       | Should the modal render without a 'x' close button?  \n| **`children`**         | _Array_     | _None_        | The elements to display when the Modal is open.\n\n"
      ],
      [
        "`<Modals />` Props",
        "| Prop                   | Type        | Default       | Description         |\n|------------------------|-------------|---------------|---------------------|\n| **`children`**         | _Array_     | _None_        | The modals to display to potentially display if their name matches `modal` key on the global store.\n"
      ]
    ]
  },
  {
    "name": "@app-elements/loading-indicator",
    "component": "LoadingIndicator",
    "description": "Show a three dots loading indicator.",
    "version": "1.1.0",
    "docs": [
      [
        "Usage",
        "```javascript\nimport LoadingIndicator from '@app-elements/loading-indicator'\n\n<LoadingIndicator />\n```\n\n"
      ],
      [
        "Size/Color",
        "Set size and color in your local css.\n\n```css\n.loading-ellipsis span {\n  font-size: 1.25em;\n  color: @primary-color;\n}\n"
      ]
    ]
  },
  {
    "name": "@app-elements/pagination",
    "component": "Pagination",
    "description": "Display pagination links for a url that follows DRF format.",
    "version": "1.1.3",
    "docs": [
      [
        "Usage",
        "Pagination is usually used in conjuction with an API request. So, in our case, we'll rely on [withRequest](components/with-request).\n\n```javascript\nimport Pagination from '@app-elements/pagination'\nimport withRequest from '@app-elements/with-request'\n\n// Here's a Component that will render the results of an API request\n// for a list of users. We're leaving out `UserDetail` in this example.\n// But it would basically be `({ name, email }) => <div>{name} / {email}</div>`\n// In this case we are assuming our Router would pass us the `pageId`:\n//   {\n//     users: {\n//       path: '/users/:pageId',\n//       component: UsersList\n//     }\n//   }\nconst UsersList = ({ pageId, isLoading, error, result }) =>\n  <div>\n    {isLoading && <p>Loading...</p>}\n    {error != null && <strong>{error}</strong>}\n    {result != null &&\n      <div>\n        {result.results.map(UserDetail)}\n        <Pagination\n          activePage={pageId}\n          request={result}\n          pageSize={25}\n        />\n      </div>\n    }\n  </div>\n\n// Let's use withRequest to make a request on our API.\nexport default withRequest({\n  endpoint: 'https://jsonplaceholder.typicode.com/users'\n})(UsersList)\n```\n\n"
      ],
      [
        "Props",
        "| Prop              | Type        | Default  | Description         |\n|-------------------|-------------|----------|---------------------|\n| **`activePage`**  | _Number_    | _None_   | The current active page. First page would be `1` not `0`\n| **`pageSize`**    | _Number_    | _None_   | How many results to show per page\n| **`request`**     | _Object_    | _None_   | The JSON returned from a list API endpoint formatted as [LimitOffsetPagination] (https://www.django-rest-framework.org/api-guide/pagination/#limitoffsetpagination)\n"
      ]
    ]
  },
  {
    "name": "@app-elements/notification",
    "component": "Notification",
    "description": "",
    "version": "2.0.0",
    "docs": [
      [
        "Usage",
        "```javascript\nimport Notification, { showNotification } from '@app-elements/notification'\n\n// Place in your root App component. Should only be rendered once in your DOM tree.\n<Notification />\n\n// To show a notification\nshowNotification({ message: 'PIRATES!' })\n```\n\n"
      ],
      [
        "`showNotification` options",
        "| Prop                   | Type       | Default       | Description         |\n|------------------------|------------|---------------|---------------------|\n| **`message`**          | _String_   | _None_        | The text to display in the notification\n| **`type`**             | _Enum_     | `'error'`     | The class to use for the notication style. One of: `[ 'error', 'warning', 'success' ]`\n| **`length`**           | _Number_   | `3000`        | Time to keep the message displayed in milliseconds\n"
      ]
    ]
  },
  {
    "name": "@app-elements/router",
    "component": "Router",
    "description": "The best router.",
    "version": "2.5.0",
    "docs": [
      [
        "Usage",
        "```javascript\nimport Router from '@app-elements/router'\n\n// import your top-level routes (details about the routes object below)\nimport routes from './routes'\n\n// ...\n<Router routes={routes} />\n```\n\n#"
      ],
      [
        "Defining Your Routes",
        "```javascript\nexport const routes = {\n  home: {\n    path: '/',\n    component: Home\n  },\n  users: {\n    path: '/users',\n    component: Users\n  },\n  user: {\n    path: '/users/:id',\n    component: User\n  },\n}\n```\n\nWhen a `path` is matched, the corresponding `component` will be rendered. The key for each object (_home_, _users_, _user_), is the name of the route.\n\n#"
      ],
      [
        "Dynamic Values From The URL",
        "If you need to parse the data out of the URL, use a dynamic segment (they start with a `:`). The parsed value will become a prop sent to the matched component.\n\nIn the above example, `{id}` would be a prop on the `<User />` component.\n\n#"
      ],
      [
        "Nested Routers",
        "If you want to group certain routes together, you can define multiple Routers. This allows you to, for instance, render a common header or navigation component for a certain grouping of routes. To nest routes, you need to define _parent_ routes. _Parent_ routes look like so:\n\n```javascript\nexport default {\n  marketing: {\n    routes: marketingRoutes,\n    component: Marketing\n  },\n  account: {\n    routes: accountRoutes,\n    component: Account\n  }\n}\n```\n\nYou'll notice the difference is that each route object has a `routes` property instead of a `path` property. If *any* of the nested `routes` match the current URL, then that parent routes' `component` will render.\n\nLet's say the `accountRoutes` are something like:\n\n```javascript\nexport const accountRoutes = {\n  login: {\n    path: '/login',\n    component: Login\n  },\n  signup: {\n    path: '/signup',\n    component: SignUp\n  }\n}\n```\n\nAnd the current URL is: `/signup`, then the _parent_ route `account` will match, and the `<Account />` component will render. The last step is to include a `<Router />` inside the `<Account />` component that gets passed the `accountRoutes` object. As an example, `<Account />` could look like this:\n\n```javascript\nimport accountRoutes from './routes'\n\n// If we wanted to render some navigation links on *all* account routes,\n// we would render them inside this `Account` component.\nimport AccountNav from './AccountNav'\n\nexport const Account = () => (\n  <div>\n    <AccountNav />\n    <Router routes={accountRoutes} />\n  </div>\n)\n```\n\nNow you have a top-level router that renders different components based on nested routes. Those top-level, or _parent_ route components can then include a nested `<Router />` to gain finer control over what gets rendered based on the current URL.\n\n#"
      ],
      [
        "External Links",
        "Since `Router` automatically wires up `<a />` elements to the router, you may wish to bypass this for external links, in these cases just add `data-external-link` to your anchor:\n\n```javascript\n<a href='http://some-external-link.com' data-external-link>External Link</a>\n```\n\n\n"
      ],
      [
        "Router Props",
        "| Prop              | Type        | Default  | Description         |\n|-------------------|-------------|----------|---------------------|\n| **`routes`**      | _Object_    | _None_   | An object of objects representing the routes. Supported keys are `path`, `component`, and `routes`.\n\n\n\n# Link\n\n```javascript\nimport { Link } from '@app-elements/router'\n\n// Render an anchor with a named route\nreturn <Link name='post' args={{ id: post.id }}>{post.title}</Link>\n```\n\n\n# RouteTo\n\n```javascript\nimport { RouteTo } from '@app-elements/router'\n\n// In your component (perhaps when a form success state is reached) \n// you can render RouteTo to route to a new URL.\nreturn <RouteTo name='blogPost' args={{ id }} />\n```\n\n"
      ],
      [
        "Link and RouteTo Props",
        "| Prop              | Type        | Default  | Description         |\n|-------------------|-------------|----------|---------------------|\n| **`name`**        | _String_    | _None_   | String that matches a key in your routes object.\n| **`args`**        | _Object_    | _None_   | Object of key-value pairs to replace dynamic values in a route definition. Ex. `posts/:id` => { id: 1 }\n| **`queries`**     | _Object_    | _None_   | Object of key-value pairs to convert to querystring params.\n"
      ]
    ]
  },
  {
    "name": "@app-elements/tooltip",
    "component": "Tooltip",
    "description": "",
    "version": "2.0.0",
    "docs": [
      [
        "Usage",
        "```javascript\nimport Tooltip from '@app-elements/tooltip'\n\n<h1><Tooltip text='This is your tooltip'>Home</Tooltip></h1>\n```\n\n"
      ],
      [
        "Props",
        "| Prop                   | Type       | Default       | Description                 |\n|------------------------|------------|-----------------------|---------------------|\n| **`className`**        | _String_   | `''`                  | className given to top-level tooltip div\n| **`text`**             | _String_   | `'I am default text'` | Text to display in Tooltip\n| **`length`**           | _Enum_     | `'medium'`            | Determines class to use to dictate width of tooltip. One of `[ 'small', 'medium', 'large', 'xlarge', 'fit' ]`\n| **`up`**               | _Boolean_  | `false`               | Will be positioned above your wrapped nodes\n| **`right`**            | _Boolean_  | `false`               | Will be positioned to the right of your wrapped nodes\n| **`down`**             | _Boolean_  | `false`               | Will be positioned below your wrapped nodes\n| **`left`**             | _Boolean_  | `false`               | Will be positioned to the left of your wrapped nodes\n"
      ]
    ]
  }
]
