import React, { FunctionComponent } from "react";
import { BlogCodeBlock } from "../blogBase/blogCodeBlock";
import { BlogParagraph } from "../blogBase/blogParagraph";
import { BlogParagraphTitle } from "../blogBase/blogParagraphTitle";

export const TestFragmentContent: FunctionComponent = () => <>

<BlogParagraph>
        Today I'd like to show case one of the primary advantages in writing your
        code in redux-fragments, testing. When we separate our code into smaller reusable fragment modules, testing
        becomes leaner and easier because fragments tend to have little to no outside dependencies. When writing unit
        tests, there's 3 types of tests we want to focus on: View to Action, Action to Reducer, Reducer to View.
      </BlogParagraph>

      <BlogParagraphTitle>View to Action</BlogParagraphTitle>
      <BlogParagraph>
        First step is to instantiate your fragment and mount it with enzyme, after that perform some simulation
        on your fragment to trigger an action, then check the mock store is as you'd expect. Try and fire every
        action at least once, and for those more problematic try and write several tests.
      </BlogParagraph>

      <BlogCodeBlock rows={7}>
        {
          "  it('View to Action', () => {\n" +
          "    const button = comp.find('button');\n" +
          "    button.simulate('click');\n" +
          "    const lastAction = exStore.getActions()[0];\n" +
          "    expect(lastAction.type).toBe(actionTypes.CLICK_BUTTON);\n" +
          "  });\n"
        }
      </BlogCodeBlock>

      <BlogParagraphTitle>Action to Reducer</BlogParagraphTitle>
      <BlogParagraph>Here we won't use our React component at all, instead we'll fire an action
        directly and see what happens. Once the action is fired, we can pass the stack of resulting actions through our
        reducer, then we can compare our result state with what the reducer function returned.
      </BlogParagraph>

      <BlogCodeBlock rows={7}>
        {
          "  it('Action to Reducer', () => {\n" +
          "    exStore.dispatch(actions.clickButton());\n" +
          "    const lastAction = exStore.getActions()[0];\n" +
          "    const newState = handlers[lastAction.type](exStore.getState(), lastAction.payload);\n" +
          "    expect(newState.text).toBe('clicked!');\n" +
          "  });\n"
        }
      </BlogCodeBlock>

      <BlogParagraph>This is a point I'd like to improve upon, since here we have to grab the
        action and then manually put it in our reducer to get the result state.
      </BlogParagraph>

      <BlogParagraphTitle>Reducer to View</BlogParagraphTitle>
      <BlogParagraph>These tests are pretty trivial. We'll simply pass in various states and
        attributes into our react component and check the HTML to see if it rendered as expected, just as you'd test
        a stateless component.
      </BlogParagraph>

      <BlogCodeBlock rows={7}>
        {
          "  it('Reducer to View', () => {\n" +
          "    exStore = mockStore({ text: 'custom' });\n" +
          "    const Sample = createSampleFragment(s => s, prefix);\n" +
          "    comp = mount(<Provider store={exStore}><Sample/></Provider>);\n" +
          "    expect(comp.find('.text').text()).toBe('custom');\n" +
          "  });\n"
        }
      </BlogCodeBlock>

      <BlogParagraphTitle>Full Example</BlogParagraphTitle>
      <BlogCodeBlock rows={49}>
        {
          "import React from 'react';\n" +
          "import { createSampleFragment } from '../src/fragments/sample/createSample.js';\n" +
          "import { createActionCreators } from '../src/fragments/sample/sampleActionCreator.js';\n" +
          "import { createActionTypes } from '../src/fragments/sample/sampleActionTypes.js';\n" +
          "import { createHandlers, initialState } from '../src/fragments/sample/sampleReducerHandlers.js';\n" +
          "import { executeHandlers } from 'redux-fragments';\n" +
          "import configureMockStore from 'redux-mock-store';\n" +
          "import thunkMiddleware from 'redux-thunk';\n" +
          "import { mount } from 'enzyme'\n" +
          "import { Provider } from 'react-redux';\n" +
          "\n" +
          "const middlewares = [ thunkMiddleware ];\n" +
          "const mockStore = configureMockStore(middlewares);\n" +
          "const prefix = 'TEST__';\n" +
          "\n" +
          "describe('Example Tests', () => {\n" +
          "  let exStore, handlers, actionTypes, actions, comp;\n" +
          "  beforeEach(() => {\n" +
          "    actionTypes = createActionTypes(prefix);\n" +
          "    actions = createActionCreators(actionTypes);\n" +
          "    exStore = mockStore({ ...initialState });\n" +
          "    handlers = createHandlers(prefix);\n" +
          "    const Sample = createSampleFragment(s => s, prefix);\n" +
          "    comp = mount(<Provider store={exStore}><Sample/></Provider>);\n" +
          "  });\n" +
          "\n" +
          "  it('View to Action', () => {\n" +
          "    const button = comp.find('button');\n" +
          "    button.simulate('click');\n" +
          "    const lastAction = exStore.getActions()[0];\n" +
          "    expect(lastAction.type).toBe(actionTypes.CLICK_BUTTON);\n" +
          "  });\n" +
          "\n" +
          "  it('Action to Reducer', () => {\n" +
          "    exStore.dispatch(actions.clickButton());\n" +
          "    const lastAction = exStore.getActions()[0];\n" +
          "    const newState = handlers[lastAction.type](exStore.getState(), lastAction.payload);\n" +
          "    expect(newState.text).toBe('clicked!');\n" +
          "  });\n" +
          "\n" +
          "  it('Reducer to View', () => {\n" +
          "    exStore = mockStore({ text: 'custom' });\n" +
          "    const Sample = createSampleFragment(s => s, prefix);\n" +
          "    comp = mount(<Provider store={exStore}><Sample/></Provider>);\n" +
          "    expect(comp.find('.text').text()).toBe('custom');\n" +
          "  });\n" +
          "\n" +
          "});\n"
        }
      </BlogCodeBlock>

      <BlogParagraphTitle>Other tests</BlogParagraphTitle>
      <BlogParagraph>We can also create a few other types of tests. Once we instantiate our
        fragment, componentWillMount will have fired, so we can make assertions to see if the proper actions were fired,
        etc. ComponentDidMount is the same case. To test shouldComponentUpdate and componentWillReceieve props though,
        we'll have to use the setProps function.
      </BlogParagraph>

      <BlogParagraphTitle>Functional</BlogParagraphTitle>
      <BlogParagraph>A gap in my testing suite is functional tests. I think these are very
        valuable, especially for reproducing bugs. Ideally in a functional test, we could click a button, which fires an
        action, that is caught by the reducer and rerenders the view. Achieving this with the mock libraries I've used
        is difficult, we'd probably have to plugin the real redux store to get this working. hopefully in another blog
        post in the future I can go over this!
      </BlogParagraph>

      <BlogParagraphTitle>What coverage should I go for?</BlogParagraphTitle>
      <BlogParagraph>Remember, even if you have 100% coverage, that doesn't mean your code is
        perfect. If you wanted to, you could probably write tests for your fragment for days, but how much worth while? Its
        hard to know where to draw the line. You might argue there's lots of simple actions that don't require a test
        case at all. I think there's only one golden rule for writing tests that I can stay with confidence, that is
        whenever you have a bug, you should write a unit test for that bug. The reason is that unit tests exist for
        prevent regressions, so when you fix a bug you want confidence its gone for good! Using karma and karma-coverage
        is a great way to measure your current coverage, but I won't go over that here.
      </BlogParagraph>
      <br/>
      <br/>
      <br/>
      <BlogParagraph>
        To see a the full example with webpack 2 and karma, check out my <a href="https://github.com/Talamond/redux-fragments-boilerplate">boilerplate</a>.
      </BlogParagraph>
</>;
