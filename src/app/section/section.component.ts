import {Component} from '@angular/core';

@Component({ // @Component - знак декоратор
    selector: 'app-section', //  Это корневой компонент, находится в index.html ( название должно иметь app - апостроф обязательно " app- ")
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.less']
})
export class SectionComponent {
    title: 'Title';
    body: 'Тело нашего компонента';
    bottomText: 'Нижний текст с небольшим описанием';
}
