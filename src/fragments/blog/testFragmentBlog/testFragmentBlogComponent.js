import React, {PropTypes} from 'react';
import { BlogBase } from '../blog/blogBaseComponent.js';
import {browserHistory} from 'react-router'; // this needs to be imported because BlogBase uses it
import arrow from '../../../assets/images/arrow.svg';

// TODO for some reason browserHistory isn't working...

export class TestFragmentBlog extends BlogBase {
  renderContent() {
    return (<div className="blog-base content">
      Today I'd like to show case one of the primary advantages in writing your code in redux-fragments, testing. When we separate our code into smaller reusable fragment modules, testing becomes leaner and easier because fragments tend to have little to no outside dependancies. When writing unit tests, there's 3 types of tests we want to focus on: view to action, action to reducer, reducer to view.

      View to Action
      First step is to instantiate your fragment and mount it with enzyme, after that perform some simulation on your fragment to trigger an action, then check the mock store is as you'd expect. Try and fire every action at least once, and for those more problematic try and write several tests.

      Action to Reducer
      Here we won't use our fragment view at all, instead we'll fire an action directly and see what happens. Once the action is fired, we can put the stack of resulting actions through our reducer, then we can compare our result state with what the reducer function returned.

      This is a point I'd like to improve upon, since here we have to grab the action and then manually put it in our reducer to get the result state.

      Reducer to View
      These tests are pretty trivial. We'll simply pass in various states and attributes into our react component and check the HTML to see if it rendered as expected.


      Other tests
      We can also create a few other types of tests. Once we instantiate our fragment, componentWillMount will have fired, so we can make assertions to see if the proper actions were fired, etc. ComponentDidMount is the same case. To test shouldComponentUpdate and componentWillReceieve props though, we'll have to use the setProps function.

      Functional
      A gap in my testing suite is functional tests. I think these are very valuable, especially for reproducing bugs. Ideally in a functional test, we could click a button, which fires an action, that is caught by the reducer and rerendera the view. Achieving this with the mock libraries I've used is difficult, we'd probably have to plugin the real redux store to get this working. hopefully in another blog post in the future I can go over this!

      What coverage should i go for?
      Remember, even if you have 100% coverage, that doesn't mean your code is perfect. If you wanted to, you could probably write tests for your fragment for days, but is it worth while?  Its hard tp know where to draw the line. You might argue there's lots of simple actions that don't require a test case at all. I think there's only one golden rule for writing tests that I can stay with confidence, that's whenever you have a bug, you should write a unit test for that bug. The reason is that unit tests exist for prevent regressions, so when you fix a bug you want confidence its gone for good! Using karma and karma-coverage is a great way to measure your current coverage, but I won't go over that here.
    </div>);
  }
}
