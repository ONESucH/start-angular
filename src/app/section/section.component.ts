import {Component} from '@angular/core';

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.less']
})

export class SectionComponent {
    title = 'Title';
    body = 'Тело нашего компонента';
    text = 'Нижний текст с небольшим описанием';
}