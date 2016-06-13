/**
 * Created by mir on 5/27/16.
 */
import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'star',
    templateUrl: './app/star/star.template.html',

})
export class StarComponent {
    @Input() isFavorite = false;

    @Output() change = new EventEmitter();

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue: this.isFavorite})
    }
}