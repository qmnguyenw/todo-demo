# TodoDemo

![image](https://user-images.githubusercontent.com/39472745/90673424-ee022d00-e281-11ea-931b-a7c01ab3a11d.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Code khá clear rồi, tư tưởng vẫn chỉ là filter list theo 1 value của property nào đó, viết ở tầng service là hợp lý, vì có thể sau này sẽ call api get về.
Có 1 điểm nhỏ là bạn nên tạo các interface cho các model, các hàm truyền tham số nên có kiểu giá trị, như vậy typing sẽ mạnh mẽ và tận dụng lợi thế của TS hơn JS thuần
