import { UserIconLetterPipe } from './user-icon-letter.pipe';
import { TestBed } from "@angular/core/testing";
import { AppComponent } from "../../app.component";

describe('GenerateUserIconLetterPipe', () => {
  it('create an instance', () => {
    const pipe = new UserIconLetterPipe();
    expect(pipe).toBeTruthy();
  });

  it(`should return 'G' as generated user icon letter for 'Gitmi Anjana'`, () => {
    const pipe2 = new UserIconLetterPipe();
    expect(pipe2.transform("Githmi Anjana")).toEqual('G');
  });
});

// import { UserIconLetterPipe } from './user-icon-letter.pipe';

// describe('UserIconLetterPipe', () => {
//   it('create an instance', () => {
//     const pipe = new UserIconLetterPipe();
//     expect(pipe).toBeTruthy();
//   });
// });
