import React, { FunctionComponent } from "react";
import { BlogParagraph } from "../blogBase/blogParagraph";
import { BlogParagraphTitle } from "../blogBase/blogParagraphTitle";

export const SynopsisContent: FunctionComponent = () => <>

<BlogParagraph>I just wanted to take a bit of time to talk about this website.</BlogParagraph>

<BlogParagraph>First I want to say that the architecture for this website is a little
  overkill considering it is just a small site about me. I believe that this architecture is much better suited
  for large enterprise applications, but I wanted to demonstrate some techniques for creating more large scale
  applications. Let's go over the techniques used here that help create a performant and scalable website.
</BlogParagraph>

<BlogParagraphTitle>Progressive image loading</BlogParagraphTitle>
<BlogParagraph>As web developers/designers, we want to be able to display high resolution
  images so those images look crisp to those even with the highest resolutions. The downside to that is often
  these images are very large and they can take seconds to download. While the download is occurring, often the
  user experience is not ideal. One solution to this problem is to use progressive image loading. Basically
  instead of fetching the giant image right away, we load a small resolution image first (which should download
  almost instantly) and then replace that image with the full resolution one when it arrives. The result is the
  users sees a blurred version of the original image for a couple seconds until the full one arrives.
  Implementing this on my website was trivial, I simply used this wonderful react progressive image loading
  library <a href="https://github.com/FormidableLabs/react-progressive-image">react-progressive-image</a>.
</BlogParagraph>

<BlogParagraphTitle>CSS Animations</BlogParagraphTitle>
<BlogParagraph>The timeline page makes use of some simple CSS animations. The trickery
  thing going on here is the animations are only being activated once they're scrolled into view (otherwise you
  can't see them!). This library <a href="https://github.com/dazld/react-on-visible">react-on-visible</a> is
  figuring out for me when my object is bring scrolled into view, it really
  made it trivial for me to implement.
</BlogParagraph>

<BlogParagraphTitle>ES6</BlogParagraphTitle>
<BlogParagraph>Creating a good development environment for your company is key to the
  happiness and productivity of your developers. Developers shouldn't have to be annoyed waiting long times and
  painful to read code.
  Here we use JavaScript ECMA2016 (ES6) and jsx instead of version of 5. ES6 is not fully supported by by all
  browsers yet (though we're getting very close!), so during our build we have to convert our ES6 into ES5
  using babel and webpack. Seems a bit silly at first, why would we want to do that? Using additional features from ES6 such
  as classes, import and export makes the code much cleaner. In my opinion this is the main reason to use ES6.
  But now we have a problem, when we debug in the browser, our code is in that ugly ES5 state, arguably
  unreadable! In comes webpack devtools, source mapping. Simply add this one line to your webpack
  build and you can also have source mapping which allows you to debug your code the same way you wrote it.
</BlogParagraph>

<BlogParagraphTitle>DLLPlugin</BlogParagraphTitle>
<BlogParagraph>This is an amazing feature that I am often surprised is not included in
  more webpack boilerplates. Webpack
  DLLPlugin and DLLReference can greatly improve build and rebuild performance. It works by making a separate
  webpack build that builds just your vendor dependencies and then the main build refers to that when it
  builds, avoiding the huge vendor rebuild each time you run your code. Its best to your vendor build pull
  directly from package.json dependencies object and its also convenient to run the vendor build on post install
  so your developers don't have to worry about it!
</BlogParagraph>

<BlogParagraphTitle>Fragments</BlogParagraphTitle>
<BlogParagraph>Finally, this website makes use of redux-fragment architecture. For more
  information, check out my previous blog or check it out on <a href="https://github.com/Talamond/redux-fragments-boilerplate">github</a>.
</BlogParagraph>
<br/>
<br/>
<br/>
<BlogParagraph>
  Thanks for reading! If you have any questions, feel free to contact me.
</BlogParagraph>
</>;
