import {Component} from "angular2/core";
import {TwitterService} from "./twitter.service";
import {LikeComponent} from "../like/like.component";
/**
 * Created by mir on 5/28/16.
 */

@Component({
    selector: 'twitter',
    templateUrl: 'app/twitter/twitter.template.html',
    providers: [TwitterService],
    directives: [LikeComponent]
})
export class TwitterComponent {
    tweets;

    constructor(twitterService:TwitterService) {
        this.tweets = twitterService.getTweets();
    }
}