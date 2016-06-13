import {Component} from "angular2/core";
/**
 * Created by mir on 5/28/16.
 */
@Component({
    selector: 'vote',
    templateUrl: 'app/vote/vote.template.html',
    styles: [`
        .my-vote{
            width: 20px;
        }
        `]
})
export class VoteComponent {
    step = 0;
    vote = 10;

    plus() {
        if (this.step <= 0) {
            this.step += 1;
            this.vote++;
        }
    }

    minus() {
        if (this.step >= 0) {
            this.step -= 1;
            this.vote--;
        }
    }
}