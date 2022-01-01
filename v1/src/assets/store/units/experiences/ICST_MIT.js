import mitIstLogo from './../../../images/experiences/mit_ist_logo.png';
import ICST_MIT_ShaunPaulma from './../recommenders/ICST_MIT_ShaunPaulma';
import ICST_MIT_BrianPenney from './../recommenders/ICST_MIT_BrianPenney.js'

const ICST_MIT = {
    experienceLogo: mitIstLogo,
    experienceUrl: 'https://ist.mit.edu/',
    experiencePosition: 'Infrastructure Coordinator Support Intern',
    experienceOrganization: 'MIT Information Systems & Technology',
    experienceDuration: 'July - August, 2015',
    experienceLocation: 'Cambridge, MA',
    experienceDescription: [
        'Performed quality assurance work including documenting jack locations for facilities project and surveying Uninterruptible Power Supply (UPS) needs and installments in more than 100 telecommunications rooms throughout campus in case of power outage on Microsoft Excel for future installations as part of a $6 million project of IS&T',
        'Built around 50 Building Management Switches (BMS) as a contribution to the MIT Sloan Building Renovation Project',
        'Labeled and scanned Media Access Control (MAC) addresses on wireless access points',
        'Terminated wires on the ports of wall field in telecommunication rooms',
        'Deposited more than 500 Lightning Protective Coils on the analog wire frames to prevent building occupants from direct lightning hits'
    ],
    experienceRecommenders: [
        ICST_MIT_ShaunPaulma,
        ICST_MIT_BrianPenney
    ]

}

export default ICST_MIT;