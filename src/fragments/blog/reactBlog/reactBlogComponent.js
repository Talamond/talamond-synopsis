import React, {PropTypes} from 'react';
import { BlogBase } from '../blog/blogBaseComponent.js';
import {browserHistory} from 'react-router'; // this needs to be imported because BlogBase uses it... that kinda sucks

export class ReactBlog extends BlogBase {
  renderContent() {
    return (<div className="blog-base content">
      <div className="blog-base paragraph">Please note that not all these are directly React related, some are more Redux related.</div>

      <div className="blog-base paragraph-title">1. Do not excessively use react state</div>
      <div className="blog-base paragraph">
        When you use internal react state, it becomes difficult to manage that state through out other parts of the application. If you ever want to modify that state outside that class, you'll need to use react refs to trigger state changes from other classes. This completely destories the flux architecture in that we're trying to centralise with Redux.
        I think its OK to use some state in 2 scenarios:
        <ul>
          <li>If you're 100% confident nothing else will ever modify state. Something like a hover or expanded state often fits this case.</li>
          <li>If you're experiencing some sort of performance problem because you're @connect is too general. Though you should consider having a more granule your connect first.</li>
        </ul>
        <br/>
        Further more, using state makes it more difficult to break up one React class into many, so it often results in a giant file. Performance issues in giant files are also more problematic to solve because you can't take advantage of React's shouldComponentUpdate lifecycle function.
      </div>

      <div className="blog-base paragraph-title">Do excessively use Redux state</div>
      <div className="blog-base paragraph">
        Put everything in Redux state! If you find your state is getting very large, try nesting your variables into parent variables or maybe its time for a separate redux-fragment or reducer. This way we can easily manage state from all our React components.
      </div>

      <div className="blog-base paragraph-title">2. Do not modify props</div>
      <div className="blog-base paragraph">
        If you modify passed in props, it can have unintended side effects. In React/Redux applications, many times you're actually modifying the Redux state, which breaks the fundamental architecture.
      </div>

      <div className="blog-base paragraph-title">Copy them if you need to</div>
      <div className="blog-base paragraph">
        Copying the properties and modifying them is ok. You can try immutable.js if you find this happening a lot. Remember React props are telling you how to draw your view. If you find yourself wanting to change them frequently, then likely your views are too complex. Maybe you need to rethink the properties you're passing in as well.
      </div>

      <div className="blog-base paragraph-title">3. Do not use React lifecycle methods to chain rest calls</div>
      <div className="blog-base paragraph">
        Often when using APIs, you have to do multiple calls to collect all the data you need to render your view. Sometimes developers use one action for one call and then trigger the next action on componentWillReceiveProps or another life cycle method. This causes additional unneeded renders which is extremely annoying to debug and hard to write test cases for.
      </div>

      <div className="blog-base paragraph-title">Define your rest call chains within 1 action</div>
      <div className="blog-base paragraph">
        Instead do all your calls in one action using promises. Sure your one actions will look complex, but at least you can tell what's going on in one method. You can optionally catch the actions fired at certain stages of your rest APIs to slowly populate data, or you can only catch the last one if you'd like! Also you can use Promise.all to run some of the calls in parallel. Check out this example using <a href="https://github.com/agraboso/redux-api-middleware">redux-api-middleware</a>.
      </div>

      <textarea rows={33} disabled className="blog-base code">
        {
          "import { CALL_API } from 'redux-api-middleware';\n" +
          "function call1() {\n" +
          "\treturn (dispatch) => {\n" +
          "\t\treturn dispatch(\n" +
          "\t\t\t[CALL_API]: {\n" +
          "\t\t\t\tendpoint: 'http://fake1.com'\n" +
          "\t\t\t\tmethod: 'GET',\n" +
          "\t\t\t\theaders: {'Content-Type': 'application/json'}\n" +
          "\t\t\t\ttypes: [\n" +
          "\t\t\t\t\t'API_1_REQUEST',\n" +
          "\t\t\t\t\t'API_2_SUCCESS',\n" +
          "\t\t\t\t\t'API_2_FAILURE',\n" +
          "\t\t\t\t]\n" +
          "\t\t\t}\n" +
          "\t\t);\n" +
          "\t}\n" +
          "}\n" +
          "function call2() {\n" +
          "\t...\n" +
          "}\n" +
          "function call3() {\n" +
          "\t...\n" +
          "}\n" +
          "function chainAPI() {\n" +
          "\treturn dispatch => {\n" +
          "\t\tconst call1Dispatch = dispatch(call1);\n" +
          "\t\tconst call2Dispatch = dispatch(call2);\n" +
          "\t\tPromise.all([call1Dispatch, call2Dispatch]).then(() => {\n" +
          "\t\t\tdispatch(call3);\n" +
          "\t\t}, () => {});\n" +
          "\t};\n" +
          "}}\n"
        }
      </textarea>

      <div className="blog-base paragraph-title">4. Do not modify state outside the reducer</div>
      <div className="blog-base paragraph">
        It is kinda self explanatory, you're ruining flux architecture by doing that and making the code more difficult to understand.
      </div>

      <div className="blog-base paragraph-title">Reading is ok</div>
      <div className="blog-base paragraph">
        You can look at the state from anywhere, but be careful, because when you access it directly you won't be triggering rerenders when it changes.
      </div>

      <div className="blog-base paragraph-title">5. Do not render all elements of large lists</div>
      <div className="blog-base paragraph">
        Rendering a lot of elements at once generally causes performance problems. It wastes a lot of time rendering things that aren't actually on the screen.
      </div>
      <div className="blog-base paragraph-title">Just render a few</div>
      <div className="blog-base paragraph">
        Ideally, you should only render the ones in views and a couple buffering above and below the ones in view. <a href="https://github.com/orgsync/react-list">React List</a> is great at this.
      </div>
      <div className="blog-base paragraph-title">6. Do not execute complex loops in the view</div>
      <div className="blog-base paragraph">
        Take the following double for loop for example where we check to see if an element is in both lists and then display those elements. Every time we render we do this calculation, even if we don't change either list! We should only this when we have to (when one of the lists change).
      </div>
      <textarea rows={11} disabled className="blog-base code">
        {
          "render() {\n" +
          "\tconst { list1, list2 } = this.props;\n" +
          "\tconst list3 = [];\n" +
          "\t_.forEach(list1, (elem1) => {\n" +
          "\t\t_.forEach(list2, (elem2) => {\n" +
          "\t\t\tif (elem1.id === elem2.id) list3.push(elem1);\n" +
          "\t\t});\n" +
          "\t});\n" +
          "\treturn this.renderList(list3);\n" +
          "}"
        }
      </textarea>
      <div className="blog-base paragraph-title">Do complex loops in reducer handler</div>
      <div className="blog-base paragraph">
        If you're fluxing right, the reducer will always know when one of the 2 lists change, so during the reducer you can decide when you must calculate list3, only once per change!
      </div>
      <textarea rows={13} disabled className="blog-base code">
        {
          "handlers[LIST_CHANGED] = (state, payload) => {\n" +
          "\tconst { list1, list2 } = payload;\n" +
          "\tconst list3 = [];\n" +
          "\t_.forEach(list1, (elem1) => {\n" +
          "\t\t_.forEach(list2, (elem2) => {\n" +
          "\t\t\tif (elem1.id === elem2.id) list3.push(elem1);\n" +
          "\t\t});\n" +
          "\t});\n" +
          "\tconst newState = {...state);\n" +
          "\tnewState.list3 = list3;\n" +
          "\treturn newState;\n" +
          "};"
        }
      </textarea>
      <br/>
      <br/>
      <br/>
      <div className="blog-base paragraph">
        tl dr; Let's try and keep the view simple by having the actions and reducers so their fair share of work!
      </div>
    </div>);
  }
}
