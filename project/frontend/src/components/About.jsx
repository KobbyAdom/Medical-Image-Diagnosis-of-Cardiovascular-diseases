import Navigation from "./Navigation";
import heartlogo2 from '../assets/heartlogo2.png'
import img1 from '../assets/img1.jpg'
import Footer from "./Footer";

export default function About() {
    return (
        <>
            <section className="flex relative flex-col  bg-gray-100 bg-center bg-cover" style={{backgroundImage:`url(${img1})`}}>
                <Navigation />
                <div className="flex flex-col gap-y-10 items-center justify-center h-full p-5 md:p-10 lg:p-20">
                    <div className="flex flex-col gap-y-5 items-center justiy-center">
                        <div className="flex relative flex-row gap-x-2 items-center px-5">
                            <img src={heartlogo2} alt="" className='size-20 absolute -left-5 z-0' />
                            <h1 className="text-5xl font-bold text-center text-white z-10 baskervville-sc-regular">CardioAlert</h1>
                        </div>
                        <p className="text-sm p-2 bg-black/40 text-white rounded text-center">
                            A simple web application that predicts heart disease by analysing an echocardiogram image.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col p-5 md:p-10 lg:p-20">
                    <div className="flex bg-black/40 flex-col rounded-md p-5 shadow">
                        <div className="flex flex-col gap-y-5 text-white">
                            <h1>Cardiovascular Disease Diagnosis</h1>
                            <p>Cardiovascular disease (CVD) refers to disorders affecting the heart and blood vessels, including coronary artery disease, arrhythmias, heart failure, and congenital heart defects. These diseases often result from factors such as poor lifestyle choices, genetic predisposition, and underlying conditions like hypertension and diabetes. CVDs are a leading cause of morbidity and mortality worldwide.</p>

                            <h2>Types of CVDs</h2>
                            <ul>
                                <li><strong>Coronary Artery Disease (CAD):</strong> Disease of the blood vessels supplying the heart muscle.</li>
                                <li><strong>Cerebrovascular Disease:</strong> Disease of the blood vessels supplying the brain (e.g., stroke).</li>
                                <li><strong>Peripheral Arterial Disease:</strong> Disease of blood vessels supplying the arms and legs.</li>
                                <li><strong>Rheumatic Heart Disease:</strong> Damage to the heart muscle and valves from rheumatic fever, caused by streptococcal bacteria.</li>
                                <li><strong>Congenital Heart Disease:</strong> Malformations of heart structure existing at birth.</li>
                                <li><strong>Deep Vein Thrombosis and Pulmonary Embolism:</strong> Blood clots in the leg veins, which can dislodge and move to the heart and lungs.</li>
                            </ul>

                            <p>Common risk factors include high blood pressure, high cholesterol, smoking, diabetes, obesity, poor diet, physical inactivity, and excessive alcohol consumption. Early detection and management are crucial for preventing and treating CVDs.</p>

                            <h2>Project Focus</h2>
                            <p>For this project, the focus is on the medical image diagnosis of specific cardiovascular diseases: angina, coronary artery disease, left ventricular disease, and hypotension. Image datasets were utilized to enhance the accuracy and effectiveness of diagnosing these conditions.</p>

                            <h3>Medical Image Diagnosis</h3>
                            <p>Medical image diagnosis involves the use of imaging technologies such as X-rays, MRI, CT scans, and echocardiograms to visualize the interior of the body for clinical analysis and medical intervention. By analyzing these images, healthcare professionals can detect abnormalities, monitor disease progression, and plan appropriate treatments. Machine learning and AI further enhance the ability to diagnose diseases with higher accuracy and efficiency.</p>

                            <h3>Cardiovascular Disease Diagnosis</h3>
                            <p>Cardiovascular disease diagnosis focuses on identifying diseases that affect the heart and blood vessels. Advanced imaging techniques allow for detailed visualization of cardiovascular structures and functions, enabling early detection and precise diagnosis.</p>

                            <h2>Specific Diseases in Focus</h2>
                            <h3>Angina</h3>
                            <p>Chest pain or discomfort caused by reduced blood flow to the heart muscle. Diagnosis typically involves imaging techniques like stress tests with echocardiography or nuclear imaging.</p>

                            <h3>Coronary Artery Disease (CAD)</h3>
                            <p>Narrowing or blockage of the coronary arteries, usually caused by atherosclerosis. Diagnosis involves coronary angiography, CT coronary angiography, and stress echocardiography.</p>

                            <h3>Left Ventricular Disease</h3>
                            <p>Disorders affecting the left ventricle, including conditions like left ventricular hypertrophy or heart failure. Diagnosis involves echocardiography, MRI, and CT scans.</p>

                            <h3>Hypotension</h3>
                            <p>Abnormally low blood pressure leading to inadequate blood flow to organs and tissues. Diagnosis involves blood pressure measurement and imaging techniques like Doppler ultrasound.</p>

                            <h2>Use of Image Datasets</h2>
                            <p>Image datasets were crucial for developing and training diagnostic models, including various imaging modalities capturing detailed visual information of the cardiovascular system.Advanced image processing and machine learning techniques aim to:</p>
                            <ul>
                                <li>Enhance the accuracy of disease detection.</li>
                                <li>Identify subtle patterns and anomalies indicating early stages of disease.</li>
                                <li>Provide comprehensive analysis of the heart and blood vessels, aiding in better diagnosis and treatment planning.</li>
                            </ul>
                            <p>Integrating these image datasets allows for a more precise approach to diagnosing cardiovascular diseases, ultimately improving patient outcomes and healthcare delivery.</p>
                    </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}
