import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  bullet = {
    title: 'Who We Are',
    buttonTitle: 'See Out Services',
    firstbody: 'Soft Soles is a dynamic holistic foot care company that provides medical and holistic nursing foot care. \n' +
      'Our Nurses our independent practitioners who take the time and consideration needed to care for their patients.\n' +
      'Nurses who:',
    secondbody:
      'When you call Soft Soles for nursing care you know that you will receive individual packaged one time use sterile tools, the best practices in infection control, a holistic approach to care by a professional and knowledgeable nurse.\n' +
      'Registered nurses are accountable to the College of Nurses of Ontario. They must update their knowledge and skills continually to ensure they meet established standards in all aspects of their practice and care.',
    bullets: [
      'Have Advanced Diabetic Foot Care Certificate',
      'Carry individual practice insurance',
      'Are in good standing with their governing body',
      'Have their immunizations up-to-date',
      'Have current clear police screen for the vulnerable',
      'Are preferred providers for Veterans Affairs'
    ],
  };
  cards: any = [
    {
        title: 'What We Do',
        body: 'At Soft Soles Advanced and Diabetic Foot Care, we are both registered nurses (RNs) and registered practical nurses (RPN). We work in hospitals, clinics, communities, and facilities. Universally, what we see is situations where independence and health deteriorates or is lost due to lower limb disease. We have partnered with facilities and clinics to decrease this risk and hope to help you as well as your family maintain lower limb health.'
    },
    {
      title: 'Join Our Team',
      buttonTitle: 'Join Now',
      body: 'Nurses are trained to be experts in the assessment, planning, implementation and evaluation of diabetes and lower limb disease. \n' +
        'By working as a Soft Soles nurse, you will become part of a team.  \n\n' +
        'Our goals are to empower one another to provide the kind of care your patients deserve. \n' +
        'You will have access to everything you need to give exceptional, compassionate care. \n\n' +
        'The way nursing should be.\n\n' +
        'Nurses are in the best position to coordinate and address the mental, physical and social health needs of their clients. \n' +
        'Soft Soles provides advice and education, above and beyond a casual health assessment. \n\n' +
        'We are committed to helping each other grow and our patients prosper. \n' +
        'Nurses maintain autonomous practices within the Soft Soles registry.\n\n' +
        'Join us and become an independent practice nurse without the isolation.\n' +
        'Request more information.',
    }
  ];
  profiles: any = [
    {
      name: 'Michelle De Grandmont, RPN, Owner, Nurse Educator',
      imageLink: '../../../assets/nurses/michelle.png',
      body: 'Michelle De Grandmont is a bilingual registered nurse. She has taken advanced diabetic foot care nurse training. \n' +
        'Her work experience includes over 15 years of experience in gerontology, acute care medicine, diabetes, and holistic healing modalities. \n' +
        'Michelle was an educator at Algonquin College, where she developed an innovative and highly successful advanced diabetic foot care program. \n' +
        'With the closing of the Algonquin program in 2018, Foot Canada Training partnered with Michelle to lead their Ottawa Foot Care Nurse Clinical courses and advanced skills workshops. In 2021 Michelle became The Assistant Director of Nursing and is eagerly looking forward to impacting nursing education and curriculum standards. \n' +
        'Michelle is a frequent motivational speaker on best practice adherence in nursing foot care and works hard to keep the best practices in the community and advancing foot care nurse as a specialty.\n' +
        'Michelle is an advisor for The Canadian Association of Foot Care Nurses, where she has worked on the development of the National Foot Care Nurse Competencies Document and The Education Initiative.\n' +
        'Soft Soles takes a three-pronged approach to foot care by meeting the lower limb health care needs of communities, connecting individuals to local organizations and resources, and offering new foot care nurses’ employment opportunities, professional support and mentoring.\n' +
        'Through the delivery of foot care clinics in the Ottawa Area, Soft Soles carries out its mandate to provide knowledge and tools to maintain and foster independence. \n' +
        'The company’s motto is “Knowledge is power. Empower yourself!”\n' +
        'Michelle and her partner live on a hobby farm with their five boys in Dunrobin, Ontario',
    },
    {
      name: 'Amber Lawford, RN, Advanced Diabetic Foot Care Nurse',
      imageLink: '../../../assets/nurses/amber.png',
      body: 'Amber has been a Registered Nurse in good standing with the College of Nurses of Ontario since 1998. Specializing in acute care medicine, and community health, Amber brings a passion for teaching and administering care to clients in their home.\n' +
        'Amber employs a holistic approach to each person she meets, enjoying teaching, sharing of stories, and forming quality relationships. Amber carries advanced diabetic foot care certification and provides excellent gold standard service to all of her clients.\n' +
        'Outside of nursing, Amber is an avid reader, quilter, scrapbooker, and a novice guitar player. She enjoy physical activities such as running, hiking with her dog, and staying active with her family. Communication skills and humor are the highlights of her personality.\n' +
        '“Nursing is a great privilege. I love seeing people in their homes, surrounded by the relics of their life, personal momentos, and family photographs. I feel a great connection and bond to the clients that welcome me into their home.”',
    },
    {
      name: 'Michelle De Grandmont, RPN, Owner, Nurse Educator',
      imageLink: '../../../assets/nurses/michelle.png',
      body: 'Michelle De Grandmont is a bilingual registered nurse. She has taken advanced diabetic foot care nurse training. \n' +
        'Her work experience includes over 15 years of experience in gerontology, acute care medicine, diabetes, and holistic healing modalities. \n' +
        'Michelle was an educator at Algonquin College, where she developed an innovative and highly successful advanced diabetic foot care program. \n' +
        'With the closing of the Algonquin program in 2018, Foot Canada Training partnered with Michelle to lead their Ottawa Foot Care Nurse Clinical courses and advanced skills workshops. In 2021 Michelle became The Assistant Director of Nursing and is eagerly looking forward to impacting nursing education and curriculum standards. \n' +
        'Michelle is a frequent motivational speaker on best practice adherence in nursing foot care and works hard to keep the best practices in the community and advancing foot care nurse as a specialty.\n' +
        'Michelle is an advisor for The Canadian Association of Foot Care Nurses, where she has worked on the development of the National Foot Care Nurse Competencies Document and The Education Initiative.\n' +
        'Soft Soles takes a three-pronged approach to foot care by meeting the lower limb health care needs of communities, connecting individuals to local organizations and resources, and offering new foot care nurses’ employment opportunities, professional support and mentoring.\n' +
        'Through the delivery of foot care clinics in the Ottawa Area, Soft Soles carries out its mandate to provide knowledge and tools to maintain and foster independence. \n' +
        'The company’s motto is “Knowledge is power. Empower yourself!”\n' +
        'Michelle and her partner live on a hobby farm with their five boys in Dunrobin, Ontario',
    },
    {
      name: 'Michelle De Grandmont, RPN, Owner, Nurse Educator',
      imageLink: '../../../assets/nurses/michelle.png',
      body: 'Michelle De Grandmont is a bilingual registered nurse. She has taken advanced diabetic foot care nurse training. \n' +
        'Her work experience includes over 15 years of experience in gerontology, acute care medicine, diabetes, and holistic healing modalities. \n' +
        'Michelle was an educator at Algonquin College, where she developed an innovative and highly successful advanced diabetic foot care program. \n' +
        'With the closing of the Algonquin program in 2018, Foot Canada Training partnered with Michelle to lead their Ottawa Foot Care Nurse Clinical courses and advanced skills workshops. In 2021 Michelle became The Assistant Director of Nursing and is eagerly looking forward to impacting nursing education and curriculum standards. \n' +
        'Michelle is a frequent motivational speaker on best practice adherence in nursing foot care and works hard to keep the best practices in the community and advancing foot care nurse as a specialty.\n' +
        'Michelle is an advisor for The Canadian Association of Foot Care Nurses, where she has worked on the development of the National Foot Care Nurse Competencies Document and The Education Initiative.\n' +
        'Soft Soles takes a three-pronged approach to foot care by meeting the lower limb health care needs of communities, connecting individuals to local organizations and resources, and offering new foot care nurses’ employment opportunities, professional support and mentoring.\n' +
        'Through the delivery of foot care clinics in the Ottawa Area, Soft Soles carries out its mandate to provide knowledge and tools to maintain and foster independence. \n' +
        'The company’s motto is “Knowledge is power. Empower yourself!”\n' +
        'Michelle and her partner live on a hobby farm with their five boys in Dunrobin, Ontario',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
