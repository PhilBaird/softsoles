import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  onecards: any = [
    {
      title: 'Register for Online Foot Care Theory Courses available Canada Wide',
      buttonTitle: 'Learn More',
      body: 'The Online Foot Care Nurse Theory course (FCN Theory) provides a theoretical foundation for nurses preparing for a career in nursing foot care, or who are looking to expand the scope of their nursing skills.'
    },
    {
      title: 'Register for In Person Clinical Training available in Ottawa or your area.',
      buttonTitle: 'Learn More',
      body: 'The Foot Care Nurse Clinical course is designed for nurses (RN’s, NP’s, RPN’s & LPN’s) who have successfully completed the Online Foot Care Nurse Theory course and are ready to practise their Foot Care Nurse skills onsite with the guidance and supervision of a Foot Care Nurse Educator.\n'
        + '\n'
        + 'This course provides in-person clinical foot care nurse skills development and mentorship. Together, both the Foot Care Nurse Theory and Foot Care Nurse Clinical courses are designed to prepare participants to function as a Foot Care Nurse within a health care team',
    },
    {
      title: 'Register for the Clinical Package',
      buttonTitle: 'Learn More',
      body: 'Clinical Training is a hands on tactile learning experience. You will be working 1-1 with your patients and your mentor. You will learn the fundamentals of advanced diabetic foot care.',
    },
    // {
    //   title: 'Register for the Advance Skills Training',
    //   buttonTitle: 'Learn More',
    //   body: 'Are you already a Nurse and are looking to expand your skill set? The Advance Skills Training Course is focused towards ',
    // },
  ];
  constructor() { }

  ngOnInit(): void {
    this.onecards.forEach( (card , i ) => {
      card.color = i % 2 === 0 ?  '--fourth' : '--fifth';
    });
  }

}
