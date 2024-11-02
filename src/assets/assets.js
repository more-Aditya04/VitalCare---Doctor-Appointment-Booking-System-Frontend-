import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import logo1 from './logo1.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'



export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    logo1,
    razorpay_logo
}

export const specialityData = [
    {
        
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'General physician',   
        image: General_physician
    },
    {
       
        
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Vijay Kadam',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Vijay Kadam is a dedicated general physician with years of experience providing compassionate, high-quality care to patients. Known for his thorough approach and commitment to patient well-being, Dr. Kadam specializes in diagnosing and managing a wide range of health conditions to support overall health and wellness.',
        fees: 350,
        address: {
            line1: '17-floor Swaraj Park ',
            line2: ' Circle Ring Nigdi, Pune'
        }

    },
    {
        _id: 'doc2',
        name: 'Dr. Ishika Nayak',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS & M.D',
        experience: '3 Years',
        about: 'Dr. Ishika Nayak is a skilled gynecologist dedicated to womens health, offering expert care in obstetrics, gynecological wellness, and reproductive health. With a compassionate and personalized approach, Dr. Nayak supports her patients at every stage, from routine care to specialized treatments.',
        fees: 300,
        address: {
             line1: '17-floor Swaraj Park ',
            line2: ' Circle Ring Nigdi, Pune'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '2 Years', 
        about: 'Dr. Sarah Patel is an experienced dermatologist committed to helping patients achieve healthy, radiant skin. Specializing in both medical and cosmetic dermatology, she provides personalized treatments for a range of skin conditions with a caring and patient-focused approach.',
        fees: 500,
        address: {
             line1: '17-floor Swaraj Park ',
            line2: ' Circle Ring Nigdi, Pune'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Christopher Lee is a compassionate pediatrician dedicated to providing exceptional care for children of all ages. With a focus on both preventive health and specialized pediatric treatments, Dr. Lee works closely with families to support each childs growth, development, and well-being.',
        fees: 350,
        address: {
             line1: '17-floor Swaraj Park ',
            line2: ' Circle Ring Nigdi, Pune'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Genelia DSouza',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Dr. Genelia DSouza is a skilled neurologist specializing in the diagnosis and treatment of complex neurological conditions. With a patient-centered approach, she is dedicated to improving brain health and quality of life for her patients through advanced, personalized care.',
        fees: 1000,
        address: {
            line1: '17-floor Swaraj Park ',
            line2: ' Circle Ring Nigdi, Pune'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Mangesh Dixit',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr.Mangesh Dixit is a skilled neurologist specializing in the diagnosis and treatment of complex neurological conditions. With a patient-centered approach, she is dedicated to improving brain health and quality of life for her patients through advanced, personalized care.',
        fees: 500,
        address: {
             line1: '17-floor Swaraj Park ',
            line2: ' Circle Ring Nigdi, Pune'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
             line1: '17-floor Swaraj Park ',
            line2: ' Circle Ring Nigdi, Pune'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Anil Dutta',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Duta is a skilled gynecologist dedicated to womens health, offering expert care in obstetrics, gynecological wellness, and reproductive health. With a compassionate and personalized approach, Dr. Nayak supports her patients at every stage, from routine care to specialized treatments.',
        fees: 550,
        address: {
            line1: '17-floor Swaraj Park ',
            line2: ' Circle Ring Nigdi, Pune'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Avika Kaur',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '3.5 Years',
        about: 'Dr. Avika Kaur is an experienced dermatologist committed to helping patients achieve healthy, radiant skin. Specializing in both medical and cosmetic dermatology, she provides personalized treatments for a range of skin conditions with a caring and patient-focused approach.',
        fees: 500 ,
        address: {
            line1: '17-floor Swaraj Park ',
            line2: ' Circle Ring Nigdi, Pune'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Javed ',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Javed is a compassionate pediatrician dedicated to providing exceptional care for children of all ages. With a focus on both preventive health and specialized pediatric treatments, Dr. Lee works closely with families to support each childs growth, development, and well-being.',
        fees: 250,
        address: {
            line1: '17-floor Swaraj Park ',
            line2: ' Circle Ring Nigdi, Pune'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Priti Sethiya',
        image: doc11,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Priti Sethiya is an experienced gastroenterologist focused on digestive health, offering expert care in diagnosing and treating conditions of the gastrointestinal tract. With a compassionate and comprehensive approach, Dr. Sethiya is dedicated to helping patients achieve optimal digestive wellness',
        fees: 600,
        address: {
             line1: '17-floor Swaraj Park ',
            line2: ' Circle Ring Nigdi, Pune'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. John Harris',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr.Harris is a skilled neurologist specializing in the diagnosis and treatment of complex neurological conditions. With a patient-centered approach, she is dedicated to improving brain health and quality of life for her patients through advanced, personalized care.',
        fees: 1000,
        address: {
             line1: '17-floor Swaraj Park ',
            line2: ' Circle Ring Nigdi, Pune'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Shewta Naik',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Shewta Naik has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
             line1: '17-floor Swaraj Park ',
            line2: ' Circle Ring Nigdi, Pune'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan ',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ryan is a skilled gynecologist dedicated to womens health, offering expert care in obstetrics, gynecological wellness, and reproductive health. With a compassionate and personalized approach, Dr. Nayak supports her patients at every stage, from routine care to specialized treatments.',
        fees: 650,
        address: {
             line1: '17-floor Swaraj Park ',
            line2: ' Circle Ring Nigdi, Pune'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Ekta ',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Ekta is an  dermatologist committed to helping patients achieve healthy, radiant skin. Specializing in both medical and cosmetic dermatology, she provides personalized treatments for a range of skin conditions with a caring and patient-focused approach.',
        fees: 250,
        address: {
             line1: '17-floor Swaraj Park ',
            line2: ' Circle Ring Nigdi, Pune'
        }
    },
]