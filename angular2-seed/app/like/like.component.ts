import {Component} from "angular2/core";
/**
 * Created by mir on 5/28/16.
 */


@Component({
    selector: 'like',
    templateUrl: 'app/like/like.template.html',
    styles: [`
        .glyphicon-heart{
            cursor: pointer;
        }
`]
})
export class LikeComponent {
    isLike = false;
    counter = 10;

    onClick() {
        this.isLike = !this.isLike;
        if (this.isLike) {
            this.counter += 1;
        } else {
            this.counter -= 1;
        }
        console.log(this.isLike, this.counter);
    }
}