import React, { FunctionComponent } from "react";
import { BlogCodeBlock } from "../blogBase/blogCodeBlock";
import { BlogParagraph } from "../blogBase/blogParagraph";
import { BlogParagraphTitle } from "../blogBase/blogParagraphTitle";

export const FragmentContent: FunctionComponent = () => <>
<BlogParagraphTitle>What are redux-fragments?</BlogParagraphTitle>
<BlogParagraph>
  Sharing React components is easy, but what about all the effort gone into redux actions and reducer handlers? Ideally, we can share not only the React component, but also the redux state, the handlers and the actions. Arranging your UI architecture with redux-fragments will help you achieve this in a testable, extendible manner. A redux-fragment consists of 4 majors pieces.
</BlogParagraph>

<BlogParagraphTitle>Action Type Creator</BlogParagraphTitle>
<BlogParagraph>
  Action types are pretty self explanatory, it returns an object containing all action types used in your fragment. The prefix is very important because it allows a fragment to be instantiated without affecting another instance. In this simple example we only have one action.
</BlogParagraph>

<BlogCodeBlock rows={8}>
  {
    "export function createActionTypes(prefix = '') {\n" +
    "  return {\n" +
    "    CLICK_BUTTON: `${prefix}CLICK_BUTTON`\n" +
    "  };\n" +
    "}\n"
  }
</BlogCodeBlock>
<BlogParagraphTitle>Action Creator</BlogParagraphTitle>
<BlogParagraph>
  The Action Creator takes in the actionTypes map, created from createActionTypes above. Since the action types were instantiated with a prefix, when these actions are fired they will use the given prefix.
</BlogParagraph>

<BlogCodeBlock rows={12}>
  {
    "export function createActions(actionTypes) {\n" +
    "  function clickButton() {\n" +
    "    return {\n" +
    "      type: actionTypes.CLICK_BUTTON,\n" +
    "      payload: {}\n" +
    "    };\n" +
    "  }\n" +
    "  return {\n" +
    "    clickButton\n" +
    "  };\n" +
    "}\n"
  }
</BlogCodeBlock>

<BlogParagraphTitle>Reducer Handlers</BlogParagraphTitle>
<BlogParagraph>
  The key difference between a regular redux reducer and fragment reducer handlers is that the fragment handlers do not actually plug themselves into the redux state. In order to use the fragment, you must plug these reducer handlers into your redux state somewhere. This allows you to instantiate many separate instances of the state, which would allow you to show multiple fragments on screen at one time if needed. It also gives the application full control over the fragment to allow easy extensibility.
</BlogParagraph>

<BlogCodeBlock rows={17}>
  {
    "import { createActionTypes } from './actionTypes.js';\n" +
    "\n" +
    "export const initialState = {\n" +
      "  showText: '',\n" +
    "};\n" +
    "\n" +
    "export const createHandlers = (prefix) => {\n" +
      "  const actionTypes = TimelineActionTypes.createActionTypes(prefix);\n" +
      "  const handlers = {};\n" +
      "  handlers[actionTypes.CLICK_BUTTON] = (state, payload) => {\n" +
        "    const newState = {...state);\n" +
        "    newState.showPopup = 'text';\n" +
        "    return newState;\n" +
      "  };\n" +
      "  return handlers;\n" +
    "};\n"
  }
</BlogCodeBlock>

<BlogParagraphTitle>React Component</BlogParagraphTitle>
<BlogParagraph>
  Finally, the last piece of the fragment is the React Component. Its just a regular React component that will take in the redux state of the fragment and actions as props. It can also take in other props as attributes.
</BlogParagraph>

<BlogCodeBlock rows={20}>
  {
    "class ButtonSample extends React.Component {\n" +
    "  static propTypes = {\n" +
    "    buttonSample: PropTypes.object, // state\n" +
    "    title: PropTypes.string, // component attribute\n" +
    "    clickButton: PropTypes.func, // action\n" +
    "  };\n" +
    "\n" +
    "  renderButton() {\n" +
    "    return <button onClick={() => this.props.clickButton()}>ClickMe</button>;\n" +
    "  }\n" +
    "  render() {\n" +
    "    return (\n" +
    "      <div>\n" +
    "        <span>{this.props.title}</span>\n" +
    "        <span>{this.props.sample.text}</span>\n" +
    "      </BlogParagraph>\n" +
    "    );\n" +
    "  }\n" +
    "}\n"
  }
</BlogCodeBlock>

<BlogParagraphTitle>Putting it all together</BlogParagraphTitle>
<BlogParagraph>
  Now that we have all the pieces to the fragment we can plug it in. First we have to create a spot in the redux state for it and hook up the handlers. Generally we do this in a typical redux reducer.
</BlogParagraph>

<BlogCodeBlock rows={32}>
  {
    "import { attachState, executeHandlers } from 'redux-fragment';\n" +
    "import { createActionTypes } from '../fragments/buttonSample/actionTypes.js';\n" +
    "import { createActions } from '../fragments/buttonSample/actionCreator.js';\n" +
    "import { initialState, createHandlers } from '../fragments/buttonSample/reducerHandlers.js';\n" +
    "\n" +
    "export const prefix = 'SAMPLE__';\n" +
    "\n" +
    "const fragments = {\n" +
    "  buttonSample: {\n" +
    "    initialState: {\n" +
    "      ...initialState\n" +
    "    },\n" +
    "    handlers: {\n" +
    "      ...createHandlers(prefix)\n" +
    "    }\n" +
    "  }\n" +
    "};\n" +
    "\n" +
    "const initialState = {\n" +
    "  root: {}\n" +
    "};\n" +
    "\n" +
    "const handlers = {};\n" +
    "const getInitialState = () => {\n" +
    "  return attachState(initialState, fragments);\n" +
    "};\n" +
    "\n" +
    "// This function is hooked up to redux store\n" +
    "export function sample(state = getInitialState(), action) {\n" +
    "  return executeHandlers(state, action, handlers, fragments);\n" +
    "}\n"
  }
</BlogCodeBlock>
<BlogParagraph>
  Then we have to connect our fragment React component to our actions and state we created.
</BlogParagraph>


<BlogCodeBlock rows={27}>
{
  "import React, {PropTypes} from 'react';\n" +
  "import { connect } from 'react-redux';\n" +
  "import { prefix } from '../reducers/sampleReducer.js';\n" +
  "import { createActionTypes } from '../fragments/buttonSample/actionTypes.js';\n" +
  "import { createActions } from '../fragments/buttonSample/actionCreator.js';\n" +
  "import { ButtonSample } from '../fragments/buttonSample/component.js';\n" +
  "import { initialState, createHandlers } from '../fragments/buttonSample/reducerHandlers.js';\n" +
  "\n" +
  "export class SampleContainer extends React.Component {\n" +
  "  static propTypes = {\n" +
  "  };\n" +
  "\n" +
  "  componentWillMount() {\n" +
  "    const enhance = connect({\n" +
  "        buttonSample: (store) => store.sample.fragments.buttonSample\n" +
  "      }, createActions(createActionTypes(prefix)));\n" +
  "    this.ButtonFragment = enhance(ButtonSample);\n" +
  "  }\n" +
  "\n" +
  "  render() {\n" +
  "    const ButtonFragment = this.ButtonFragment;\n" +
  "    return (\n" +
  "      <ButtonFragment title=\"Button Fragment\"/>\n" +
  "    );\n" +
  "  }\n" +
  "}\n"
}
</BlogCodeBlock>
<BlogParagraph>
  That's it!
</BlogParagraph>

<BlogParagraphTitle>The explanation</BlogParagraphTitle>
<BlogParagraph>
  So it works, great, why go through all the extra effort?
</BlogParagraph>

<BlogParagraphTitle>Sharing state can get messy</BlogParagraphTitle>
<BlogParagraph>
  Trying to share the same state for different parts of the applications causes problems. For example, if you ever need to show both those parts of the application at once, you won't be able to because they share state and therefore would look exactly the same. Another problem that can occur is making a change for one page that has unintented side effects in another page. Fragment ensures separate state instances.
</BlogParagraph>
<BlogParagraphTitle>Large modules of code are rarely exactly the same</BlogParagraphTitle>
<BlogParagraph>
  Fragments are completely extendible and overwritable in every way. If you ever need to reuse code, you'll have no problem extending it to make those specific tweaks.
</BlogParagraph>
<BlogParagraphTitle>Helps separate duties</BlogParagraphTitle>
<BlogParagraph>
  Building your code as fragments encourages developers to think ahead about separating duties to produce decoupled code.
</BlogParagraph>
<BlogParagraphTitle>Great for testing</BlogParagraphTitle>
<BlogParagraph>
  With fragments, you can test each one independently from the rest of the code. To learn more about testing, checkout my next blog.
</BlogParagraph>
<br/>
<br/>
<br/>
<BlogParagraph>
    Check out my <a href="https://github.com/Talamond/redux-fragments-boilerplate">boilerplate</a> more some examples on fragments!
</BlogParagraph>

</>;
