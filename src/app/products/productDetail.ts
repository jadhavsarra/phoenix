import { Product, Cam } from '../product';

export const HEROES: Product[] = [
  {
    name: 'Security Camera',
    types:["Thermal Camera", "IP Camera", "Analog Camera"],
    filter:['2 MP', '3 MP', '5 MP'],
    img:"../assets/images/products/20170216162927113.jpg",
    desc:"DS-2CD2085FWD-I",
    desc1:"8 MP IR Fixed Bullet Network Camera",
    specifications:[
      "1.0 Megapixel high-performance CMOS",
      "Analog HD output, up to 720P resolution",
      "True Day/Night",
      "DNR, Smart IR",
      "Up to 20m IR distance"
    ]
  },
  {
    name: 'Hard Drives',
    img:"../assets/images/products/harddrive.jpeg",
    desc:"WD-121-PURZ",
    desc1:"WD PURPLE SURVEILLANCE HARD DRIVE",
    specifications:[
      "Capacity 1TB - 12TB",
      "Interface SATA 6Gb/s",
      "Form Factor 3.5 Inch",
      "Disk Speed 5400 rpm, 7200 rpm"
    ]
  }
];

export const SecurityCamera : Cam[] = [
  {
    name: 'Turbo HD Camera',
    img:"../assets/images/products/20170216162927113.jpg",
    desc:"DS-2CE56C0T-IRP",
    desc1:"HD720P Indoor IR Turret Camera",
    specifications:[
      "1.0 Megapixel high-performance CMOS",
      "Analog HD output, up to 720P resolution",
      "True Day/Night",
      "DNR, Smart IR",
      "Up to 20m IR distance"
    ]
  },
  {
    name: 'Turbo HD Camera',
    img:"../assets/images/products/20170216162927113.jpg",
    desc:"DS-2CE1AC0T-IRPF",
    desc1:"HD720P IR Bullet Camera",
    specifications:[
      "1.0 Megapixel high-performance CMOS",
      "Analog HD output, up to 720P resolution",
      "True Day/Night",
      "DNR, Smart IR",
      "Up to 20m IR distance",
      "IP66 weatherproof",
      "Switchable TVI/AHD/CVI/CVBS"
    ]
  },
  {
    name: 'Turbo HD Camera',
    img:"../assets/images/products/20170216162927113.jpg",
    desc:"DS-2CE5AD0T-IRPF",
    desc1:"HD1080P Indoor IR Turret Camera",
    specifications:[
      "2.0 Megapixel high-performance CMOS",
      "Analog HD output, up to 1080P resolution",
      "True Day/Night, Smart IR ",
      "DNR, Smart IR",
      "Up to 20m IR distance",
      "OSD Menu",
      "Up the Coax(HIKVISION-C Protocol)",
      "Switchable TVI/AHD/CVI/CVBS"
    ]
  },
  {
    name: 'Turbo HD Camera',
    img:"../assets/images/products/20170216162927113.jpg",
    desc:"DS-2CE56H0T-ITPF",
    desc1:"5 MP Turret Camera",
    specifications:[
      "5.0 Megapixel high-performance CMOS",
      "Analog HD output, up to 5MP resolution",
      "True Day/Night",
      "OSD menu, 2D DNR, DWDR",
      "EXIR technology, up to 20m IR distance",
      "4 in 1 video output (switchable TVI/AHD/CVI/CVBS)",
      "Up the Coax(HIKVISION-C)"
    ]
  },
  {
    name: 'Turbo HD Camera',
    img:"../assets/images/products/20170216162927113.jpg",
    desc:"DS-2CE16H0T-IT1/3/5F",
    desc1:"5 MP Bullet Camera",
    specifications:[
      "5.0 Megapixel high-performance CMOS",
      "Analog HD output, up to 5MP resolution",
      "True Day/Night",
      "OSD menu, 2D DNR, DWDR",
      "EXIR technology, up to 20/40/80m IR distance",
      "IP67",
      "4 in 1 video output (switchable TVI/AHD/CVI/CVBS)",
      "Up the Coax(HIKVISION-C)"
    ]
  }
];
