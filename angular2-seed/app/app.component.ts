import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses/courses.component";
import {AuthorsComponent} from "./authors/authors.component";
import {StarComponent} from "./star/star.component";
import {LikeComponent} from "./like/like.component";
import {VoteComponent} from "./vote/vote.component";
import {TwitterComponent} from "./twitter/twitter.component";


@Component({
    selector: 'my-app',
    template:
        `
        <h1>My First Angular 2 App</h1>
        <twitter></twitter>
        <br/>
        <courses></courses>
        <authors></authors>
        <i class="glyphicon glyphicon-star"></i>
        <star [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></star>
        
        <like></like>
        <vote></vote>
        `,

    directives: [
        TwitterComponent,
        CoursesComponent,
        AuthorsComponent,
        StarComponent,
        LikeComponent,
        VoteComponent
    ]
})
export class AppComponent {
    post = {
        title: "MyTitle",
        isFavorite: true
    };

    onFavoriteChange($event) {
        console.log($event);
    }
}