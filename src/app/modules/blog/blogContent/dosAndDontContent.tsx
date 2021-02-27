import React, { FunctionComponent } from "react";
import { BlogCodeBlock } from "../blogBase/blogCodeBlock";
import { BlogParagraph } from "../blogBase/blogParagraph";
import { BlogParagraphTitle } from "../blogBase/blogParagraphTitle";

export const DosAndDontsContent: FunctionComponent = () => <>
  <BlogParagraph>Please note that not all these are directly React related, some are more Redux related.</BlogParagraph>

  <BlogParagraphTitle>1. Do not excessively use react state</BlogParagraphTitle>
  <BlogParagraph>
    When you use internal react state, it becomes difficult to manage that state through out other parts of the application. If you ever want to modify that state outside that class, you'll need to use react refs to trigger state changes from other classes. This completely destories the flux architecture in that we're trying to centralise with Redux.
    I think its OK to use some state in 2 scenarios:
    <ul>
      <li>If you're 100% confident nothing else will ever modify state. Something like a hover or expanded state often fits this case.</li>
      <li>If you're experiencing some sort of performance problem because you're @connect is too general. Though you should consider having a more granule your connect first.</li>
    </ul>
    <br/>
    Further more, using state makes it more difficult to break up one React class into many, so it often results in a giant file. Performance issues in giant files are also more problematic to solve because you can't take advantage of React's shouldComponentUpdate lifecycle function.
  </BlogParagraph>

  <BlogParagraphTitle>Do excessively use Redux state</BlogParagraphTitle>
  <BlogParagraph>
    Put everything in Redux state! If you find your state is getting very large, try nesting your variables into parent variables or maybe its time for a separate redux-fragment or reducer. This way we can easily manage state from all our React components.
  </BlogParagraph>

  <BlogParagraphTitle>2. Do not modify props</BlogParagraphTitle>
  <BlogParagraph>
    If you modify passed in props, it can have unintended side effects. In React/Redux applications, many times you're actually modifying the Redux state, which breaks the fundamental architecture.
  </BlogParagraph>

  <BlogParagraphTitle>Copy them if you need to</BlogParagraphTitle>
  <BlogParagraph>
    Copying the properties and modifying them is ok. You can try immutable.js if you find this happening a lot. Remember React props are telling you how to draw your view. If you find yourself wanting to change them frequently, then likely your views are too complex. Maybe you need to rethink the properties you're passing in as well.
  </BlogParagraph>

  <BlogParagraphTitle>3. Do not use React lifecycle methods to chain rest calls</BlogParagraphTitle>
  <BlogParagraph>
    Often when using APIs, you have to do multiple calls to collect all the data you need to render your view. Sometimes developers use one action for one call and then trigger the next action on componentWillReceiveProps or another life cycle method. This causes additional unneeded renders which is extremely annoying to debug and hard to write test cases for.
  </BlogParagraph>

  <BlogParagraphTitle>Define your rest call chains within 1 action</BlogParagraphTitle>
  <BlogParagraph>
    Instead do all your calls in one action using promises. Sure your one actions will look complex, but at least you can tell what's going on in one method. You can optionally catch the actions fired at certain stages of your rest APIs to slowly populate data, or you can only catch the last one if you'd like! Also you can use Promise.all to run some of the calls in parallel. Check out this example using <a href="https://github.com/agraboso/redux-api-middleware">redux-api-middleware</a>.
  </BlogParagraph>

  <BlogCodeBlock rows={33}>
    {
      "import { CALL_API } from 'redux-api-middleware';\n" +
      "function call1() {\n" +
      "  return (dispatch) => {\n" +
      "    return dispatch(\n" +
      "      [CALL_API]: {\n" +
      "        endpoint: 'http://fake1.com'\n" +
      "        method: 'GET',\n" +
      "        headers: {'Content-Type': 'application/json'}\n" +
      "        types: [\n" +
      "          'API_1_REQUEST',\n" +
      "          'API_2_SUCCESS',\n" +
      "          'API_2_FAILURE',\n" +
      "        ]\n" +
      "      }\n" +
      "    );\n" +
      "  }\n" +
      "}\n" +
      "function call2() {\n" +
      "  ...\n" +
      "}\n" +
      "function call3() {\n" +
      "  ...\n" +
      "}\n" +
      "function chainAPI() {\n" +
      "  return dispatch => {\n" +
      "    const call1Dispatch = dispatch(call1);\n" +
      "    const call2Dispatch = dispatch(call2);\n" +
      "    Promise.all([call1Dispatch, call2Dispatch]).then(() => {\n" +
      "      dispatch(call3);\n" +
      "    }, () => {});\n" +
      "  };\n" +
      "}}\n"
    }
  </BlogCodeBlock>

  <BlogParagraphTitle>4. Do not modify state outside the reducer</BlogParagraphTitle>
  <BlogParagraph>
    It is kinda self explanatory, you're ruining flux architecture by doing that and making the code more difficult to understand.
  </BlogParagraph>

  <BlogParagraphTitle>Reading is ok</BlogParagraphTitle>
  <BlogParagraph>
    You can look at the state from anywhere, but be careful, because when you access it directly you won't be triggering rerenders when it changes.
  </BlogParagraph>

  <BlogParagraphTitle>5. Do not render all elements of large lists</BlogParagraphTitle>
  <BlogParagraph>
    Rendering a lot of elements at once generally causes performance problems. It wastes a lot of time rendering things that aren't actually on the screen.
  </BlogParagraph>
  <BlogParagraphTitle>Just render a few</BlogParagraphTitle>
  <BlogParagraph>
    Ideally, you should only render the ones in views and a couple buffering above and below the ones in view. <a href="https://github.com/orgsync/react-list">React List</a> is great at this.
  </BlogParagraph>
  <BlogParagraphTitle>6. Do not execute complex loops in the view</BlogParagraphTitle>
  <BlogParagraph>
    Take the following double for loop for example where we check to see if an element is in both lists and then display those elements. Every time we render we do this calculation, even if we don't change either list! We should only this when we have to (when one of the lists change).
  </BlogParagraph>
  <BlogCodeBlock rows={11}>
    {
      "render() {\n" +
      "  const { list1, list2 } = this.props;\n" +
      "  const list3 = [];\n" +
      "  _.forEach(list1, (elem1) => {\n" +
      "    _.forEach(list2, (elem2) => {\n" +
      "      if (elem1.id === elem2.id) list3.push(elem1);\n" +
      "    });\n" +
      "  });\n" +
      "  return this.renderList(list3);\n" +
      "}"
    }
  </BlogCodeBlock>
  <BlogParagraphTitle>Do complex loops in reducer handler</BlogParagraphTitle>
  <BlogParagraph>
    If you're fluxing right, the reducer will always know when one of the 2 lists change, so during the reducer you can decide when you must calculate list3, only once per change!
  </BlogParagraph>
  <BlogCodeBlock rows={13}>
    {
      "handlers[LIST_CHANGED] = (state, payload) => {\n" +
      "  const { list1, list2 } = payload;\n" +
      "  const list3 = [];\n" +
      "  _.forEach(list1, (elem1) => {\n" +
      "    _.forEach(list2, (elem2) => {\n" +
      "      if (elem1.id === elem2.id) list3.push(elem1);\n" +
      "    });\n" +
      "  });\n" +
      "  const newState = {...state);\n" +
      "  newState.list3 = list3;\n" +
      "  return newState;\n" +
      "};"
    }
  </BlogCodeBlock>
  <br/>
  <br/>
  <br/>
  <BlogParagraph>
    tl dr; Let's try and keep the view simple by having the actions and reducers so their fair share of work!
  </BlogParagraph>
</>;
