import React, { FunctionComponent } from "react";
import { BlogParagraph } from "../blogBase/blogParagraph";
import { BlogParagraphTitle } from "../blogBase/blogParagraphTitle";

export const AboutMeContent: FunctionComponent = () => <>
  <BlogParagraph>Beside coding, I take part in other hobbies. I've been known to do all sorts
    of things mainly including playing board games, video games, long distance running, rock climbing and badminton.
    One thing I'd like to do more of is traveling. So far I've been to Japan, Korea, Costa Rica, Guatemala and the
    US (if you even count that as traveling!). I feel there's much more to explore!
  </BlogParagraph>

  <BlogParagraphTitle>Random Activity Group</BlogParagraphTitle>
  <BlogParagraph>In 2013 I created my own meetup group to facilitate my desire for trying
    random new things. Its called the <a href="https://www.meetup.com/Random-activity-group-20s/">Random Activity Group</a> aimed at providing young
    adults an opportunity to hang out with other young adults doing
    pretty much anything. Over the years we've accumulated over 6000 members with over 1000 events with activities
    such as: board game nights, paintball, various sports, hiking, camping, clubbing, eating out, movies, random
    parties, shooting range, attending festivals, ski trips... the list is endless. Although I am no longer an active
    organizer/attendee (I still make some cameo appearances) in Random Activity Group, it still lives on through
    others I've promoted to organizers! We still have meetups multiple times every week!
  </BlogParagraph>

  <BlogParagraphTitle>Role Play Battle Calc</BlogParagraphTitle>
  <BlogParagraph>
    In 2015 I created a small web app I call <a href="https://github.com/Talamond/RolePlayBattleCalc">Role Play
    Battle Calc</a>.
    For awhile, I was doing some good old fashioned role playing with my friends, but I found my friends were
    getting
    bored during enemy turns because it cuts out on their play time waiting for enemies to roll dice and such. To
    speed up battles, I created this ugly React/Redux web app that rolled the dice for us and did all the
    calculations to see what amount of damage had been dealt, whether or not is hit, missed or critical hits,
    tracked hp and status etc
    etc... Basically it kept track of all the annoying game mechanics that made battles take longer and avoided me
    from making humans error. The app isn't much of a looker, but its functional and helped speed up battles!
  </BlogParagraph>
</>;
