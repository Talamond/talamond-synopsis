import React, {PropTypes} from 'react';
import {BlogBase} from '../blog/blogBaseComponent.js';
import {browserHistory} from 'react-router'; // this needs to be imported because BlogBase uses it... that kinda sucks

export class WebsiteBlog extends BlogBase {
  renderContent() {
    return (
      <div className="blog-base content">
        <div className="blog-base paragraph">I just wanted to take a bit of time to talk about this website.</div>

        <div className="blog-base paragraph">First I want to say that the architecture for this website is a little
          overkill considering it is just a small site about me. I believe that this architecture is much better suited
          for large enterprise applications, but I wanted to demonstrate some techniques for creating more large scale
          applications. Let's go over the techniques used here that help create a performant and scalable website.
          Please note, because I'm cheap, this website is just being hosted for free on github.
        </div>

        <div className="blog-base paragraph-title">Progressive image loading</div>
        <div className="blog-base paragraph">As web developers/designers, we want to be able to display high resolution
          images so those images look crisp to those even with the highest resolutions. The downside to that is often
          these images are very large and they can take seconds to download. While the download is occurring, often the
          user experience is not ideal. One solution to this problem is to use progressive image loading. Basically
          instead of fetching the giant image right away, we load a small resolution image first (which should download
          almost instantly) and then replace that image with the full resolution one when it arrives. The result is the
          users sees a blurred version of the original image for a couple seconds until the full one arrives.
          Implementing this on my website was trivial, I simply used this wonderful react progressive image loading
          library react - progressive - image. Check it out here:
        </div>

        <div className="blog-base paragraph-title">CSS Animations</div>
        <div className="blog-base paragraph">The timeline page makes use of some simple CSS animations. The trickery
          thing going on here is the animations are only being activated once they're scrolled into view (otherwise you
          can't see them!). This library is figuring out for me when my object is bring scrolled into view, it really
          made it trivial for me to implement.
        </div>

        <div className="blog-base paragraph-title">Tag Cloud</div>
        <div className="blog-base paragraph">The tag clouds are drawn dynamically each time. There's some naive
          algorithm going on behind the scenes that's calculates a font size for each word based off the total size of
          the words. Go ahead a feel free to draw your own tag cloud below!
        </div>

        <div className="blog-base paragraph-title">ES6</div>
        <div className="blog-base paragraph">Creating a goof development environment for your company I'd key to the
          happiness and productivity of your developers. Developers shouldn't have to be annoyed waiting long times.
          Here we use JavaScriptECMA 6 (ES6) and jsx instead of version of 5. ES6 is not fully supported by by all
          browsers yet (though we're getting very close! link), so during our build we have to convert our ES6 into ES5
          using babel. Seems a bit silly at first, why would we want to do that? Using additional features from ES6 such
          as classes, import and export makes the code much cleaner. In my opinion this is the main reason to use ES6.
          But now er have a problem, when we debug in the browser, our code is in that ugly ES5 state, arguably
          unreadable! (see example)
        </div>

        <div className="blog-base paragraph">In comes webpack devtools, source mapping. simply add this one line to your
          build and you can also have source mapping which allows you to debug your code the same way you wrote it.
        </div>

        <div className="blog-base paragraph-title">DLLPlugin</div>
        <div className="blog-base paragraph">This is an amazing feature that I am often surprised is not included in
          webpack boilerplates online (props to this boilerplate that helped me figure out how to do this link). Webpack
          DLLPlugin and DLLReference can greatly improve build and rebuild performance. It works by making a separate
          webpack build that builds just your vendors dependancies and then the main build refers to that when it
          builds, avoiding the huge vendor rebuild each time you run your code. Its best to your vendor build pull
          directly from package.json dependancies object and its also convenient to run the vendor build on post install
          so your developers don't have to worry about it!
        </div>

        <div className="blog-base paragraph-title">Webpack Production Build</div>
        <div className="blog-base paragraph">The production build doesn't really have any special features, though it
          minifies the code as you'd expect.
        </div>

        <div className="blog-base paragraph-title">Fragments</div>
        <div className="blog-base paragraph">Finally, this website makes use of redux-fragment architecture. For more
          information, check out my previous blog or check it out on github.
        </div>

        <div className="blog-base paragraph">Thanks for reading! If you have any questions, feel free to contact me.
        </div>

      </div>
    );
  }
}
