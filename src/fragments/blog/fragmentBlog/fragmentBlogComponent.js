import React, {PropTypes} from 'react';
import { BlogBase } from '../blog/blogBaseComponent.js';
import {browserHistory} from 'react-router'; // this needs to be imported because BlogBase uses it... that kinda sucks

export class FragmentBlog extends BlogBase {
  renderContent() {
    return (<div className="blog-base content">
      <div className="blog-base paragraph-title">What are redux-fragments?</div>
      <div className="blog-base paragraph">
        Sharing React components is easy, but what about all the effort gone into redux actions and reducer handlers? Ideally we can share not only the React component, but also the redux state, the handlers and the actions. Arranging your UI architecture with redux-fragments will help you achieve this in a testable, extendible and overwritable manner.
      </div>

      <div className="blog-base paragraph-title">The structure</div>
      <div className="blog-base paragraph">
        A redux-fragment consists of 4 majors pieces.
      </div>

      <div className="blog-base paragraph-title">Action Type Creator</div>
      <div className="blog-base paragraph">
        Action types are pretty self explanatory,. The prefix very is important. Its key to reusing a fragment without one instance affecting another.
      </div>

      <textarea rows={8} disabled className="blog-base code">
        {
          "export function createActionTypes(prefix = '') {\n" +
          "\treturn {\n" +
          "\t\tCLICK_BUTTON: `${prefix}CLICK_BUTTON`,\n" +
          "\t\tSELECT_TAB: `${prefix}SELECT_TAB`,\n" +
          "\t\tCHANGE_PAGE: `${prefix}CHANGE_PAGE`\n" +
          "\t};\n" +
          "}\n"
        }
      </textarea>
      <div className="blog-base paragraph-title">Action Creator</div>
      <div className="blog-base paragraph">
        Action Creator takes in actionTypes map, created from createActionTypes above. Since the action types were instantiated with a prefix, when these actions are fired, they will also use this prefix, which allows one fragment to be independant from another, evne though they share the same code.
      </div>

      <textarea rows={12} disabled className="blog-base code">
        {
          "export function createActions(actionTypes) {\n" +
          "\tfunction clickButton() {\n" +
          "\t\treturn {\n" +
          "\t\t\ttype: actionTypes.CLICK_BUTTON,\n" +
          "\t\t\tpayload: {}\n" +
          "\t\t};\n" +
          "\t}\n" +
          "\treturn {\n" +
          "\t\tclickButton\n" +
          "\t};\n" +
          "}\n"
        }
      </textarea>

      <div className="blog-base paragraph-title">Reducer Handlers</div>
      <div className="blog-base paragraph">
        The key difference between a regular redux reducer and fragment handlers is that the fragment handlers do not actually plug themselves into the redux state. In order to use the fragment, you must plug these reducer handlers into your redux state somewhere. This allows you to instantiate many separate instances of the state, which would allow you to show multiple fragments on screen at one time if needed.
      </div>

      <textarea rows={15} disabled className="blog-base code">
        {
          "import { createActionTypes } from './actionTypes.js';\n" +
          "export const initialState = {\n" +
            "\tshowText: '',\n" +
          "};\n" +
          "export const createHandlers = (prefix) => {\n" +
            "\tconst actionTypes = TimelineActionTypes.createActionTypes(prefix);\n" +
            "\tconst handlers = {};\n" +
            "\thandlers[actionTypes.CLICK_BUTTON] = (state, payload) => {\n" +
              "\t\tconst newState = {...state);\n" +
              "\t\tnewState.showPopup = 'text';\n" +
              "\t\treturn newState;\n" +
            "\t};\n" +
            "\treturn handlers;\n" +
          "};\n"
        }
      </textarea>

      <div className="blog-base paragraph-title">React Component</div>
      <div className="blog-base paragraph">
        Finally, the last piece of the fragment is the React Component. Its just a regular React component that will take in the redux state of the fragment and actions as props. It can also take in other props as attributes.
      </div>

      <textarea rows={19} disabled className="blog-base code">
        {
          "class ButtonSample extends React.Component {\n" +
          "\tstatic propTypes = {\n" +
          "\t\tbuttonSample: PropTypes.object, // state\n" +
          "\t\ttitle: PropTypes.string, // component attribute\n" +
          "\t\tclickButton: PropTypes.func, // action\n" +
          "\t};\n" +
          "\trenderButton() {\n" +
          "\t\treturn <button onClick={() => this.props.clickButton()}>ClickMe</button>;\n" +
          "\t}\n" +
          "\trender() {\n" +
          "\t\treturn (\n" +
          "\t\t\t<div>\n" +
          "\t\t\t\t<span>{this.props.title}</span>\n" +
          "\t\t\t\t<span>{this.props.sample.text}</span>\n" +
          "\t\t\t</div>\n" +
          "\t\t);\n" +
          "\t}\n" +
          "}\n"
        }
      </textarea>

      <div className="blog-base paragraph-title">Putting it all together</div>
      <div className="blog-base paragraph">
        Now that we have all the pieces to the fragment we can plug it in. First we have to create a spot in the redux state for it and hook up the handlers. Generally we do this in a typical redux reducer.
      </div>

      <textarea rows={27} disabled className="blog-base code">
        {
          "import { attachState, executeHandlers } from 'redux-fragment';\n" +
          "import { createActionTypes } from '../fragments/buttonSample/actionTypes.js';\n" +
          "import { createActions } from '../fragments/buttonSample/actionCreator.js';\n" +
          "import { initialState, createHandlers } from '../fragments/buttonSample/reducerHandlers.js';\n" +
          "export const prefix = 'SAMPLE__';\n" +
          "const fragments = {\n" +
          "\tbuttonSample: {\n" +
          "\t\tinitialState: {\n" +
          "\t\t\t...initialState\n" +
          "\t\t},\n" +
          "\t\thandlers: {\n" +
          "\t\t\t...createHandlers(prefix)\n" +
          "\t\t}\n" +
          "\t}\n" +
          "};\n" +
          "const initialState = {\n" +
          "\troot: {}\n" +
          "};\n" +
          "const handlers = {};\n" +
          "const getInitialState = () => {\n" +
          "\treturn attachState(initialState, fragments);\n" +
          "};\n" +
          "// This function is hooked up to redux store\n" +
          "export function sample(state = getInitialState(), action) {\n" +
          "\treturn executeHandlers(state, action, handlers, fragments);\n" +
          "}\n"
        }
      </textarea>
      <div className="blog-base paragraph">
        Then we have to connect our React component to our actions and state we created.
      </div>


          <textarea rows={24} disabled className="blog-base code">
      {
        "import React, {PropTypes} from 'react';\n" +
        "import { connect } from 'react-redux';\n" +
        "import { prefix } from '../reducers/sampleReducer.js';\n" +
        "import { createActionTypes } from '../fragments/buttonSample/actionTypes.js';\n" +
        "import { createActions } from '../fragments/buttonSample/actionCreator.js';\n" +
        "import { ButtonSample } from '../fragments/buttonSample/component.js';\n" +
        "import { initialState, createHandlers } from '../fragments/buttonSample/reducerHandlers.js';\n" +
        "export class SampleContainer extends React.Component {\n" +
        "\tstatic propTypes = {\n" +
        "\t};\n" +
        "\tcomponentWillMount() {\n" +
        "\t\tconst enhance = connect({\n" +
        "\t\t\t\tbuttonSample: (store) => store.sample.fragments.buttonSample\n" +
        "\t\t\t}, createActions(createActionTypes(prefix)));\n" +
        "\t\tthis.ButtonFragment = enhance(ButtonSample);\n" +
        "\t}\n" +
        "\trender() {\n" +
        "\t\tconst ButtonFragment = this.ButtonFragment;\n" +
        "\t\treturn (\n" +
        "\t\t\t<ButtonFragment title=\"Button Fragment\"/>\n" +
        "\t\t);\n" +
        "\t}\n" +
        "}\n"
      }
      </textarea>
      <div className="blog-base paragraph">
        That's it!
      </div>

      <div className="blog-base paragraph-title">The explanation</div>
      <div className="blog-base paragraph">
        So it works, great, why go through all the extra effort?
      </div>

      <div className="blog-base paragraph-title">Sharing state can get messy</div>
      <div className="blog-base paragraph">
        Trying to share the same state for different parts of the applications causes problems. For example, if you ever need to show both those parts of the application at once, you won't be able to because they share state. Also when you share the same state, you often have to make changes that affect all usages of the shared code. With a fragment you can extend of overwrite to avoid having to affect other areas of the code

      </div>
      <div className="blog-base paragraph-title">Large modules of code are rarely exactly the same</div>
      <div className="blog-base paragraph">
        Fragments are completely extendible and overwritable in every way. If you ever need to reuse code, you'll have no problem extending it to make those specific tweaks.
      </div>
      <div className="blog-base paragraph-title">Helps separate duties</div>
      <div className="blog-base paragraph">
        Building your code as fragments encourages developers to think ahead about separating duties to produce decoupled code.
      </div>
      <div className="blog-base paragraph-title">Great for testing</div>
      <div className="blog-base paragraph">
        With fragments, you can test each one independently from the rest of the code.
      </div>
    </div>);
  }
}
