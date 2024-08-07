import { useState } from 'react';
import axios from 'axios';
import img1 from '../assets/img1.jpg'
import heartlogo2 from '../assets/heartlogo2.png'
import Navigation from './Navigation';
import Footer from './Footer';

function Home() {
    const [file, setFile] = useState(null);
    const [prediction, setPrediction] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            axios.post('http://localhost:5000/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials:true,
            }).then((response) => {
                console.log(response);
                setPrediction(response.data.predicted_label);
            });
            
            
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <section className="flex relative flex-col  bg-gray-100 bg-center bg-cover" style={{backgroundImage:`url(${img1})`}}>
                <Navigation />
                <div className="flex flex-col gap-y-10 items-center justify-center h-full p-5 md:p-10 lg:p-20">
                    <div className="flex flex-col gap-y-5 items-center justiy-center p-1">
                        <div className="flex relative flex-row gap-x-2 items-center px-5">
                            <img src={heartlogo2} alt="" className='size-20 absolute -left-5 z-0' />
                            <h1 className="text-5xl font-bold text-center text-white z-10 baskervville-sc-regular">CardioAlert</h1>
                        </div>
                        <p className="text-sm p-2 bg-black/40 text-white rounded text-center">
                            A simple web application that predicts heart disease by analysing an echocardiogram image.
                        </p>
                    </div>
                    <div className="flex flex-row h-full w-full">
                        <div className="flex flex-col gap-y-5 md:w-1/2 w-full h-full bg-white/10 shadow-lg p-5 rounded-3xl items-center justify-center">
                            <form className='flex flex-col gap-y-5 justify-center items-center' onSubmit={handleSubmit}>
                                <h3 htmlFor="image" className="text-xl text-white text-center font-semibold w-3/4 baskervville-sc-regular">Upload an echocardiogram image to begin</h3>
                                <div className="mb-3 flex flex-col gap-y-1">
                                    <input required id='image' className='flex p-2 rounded-md border border-gray-600 w-full ring-1 ring-gray-600' type="file" onChange={handleFileChange} />
                                </div>
                                <div className="mb-3">
                                    <button className='flex px-2 py-1 text-white rounded shadow-lg bg-black/40' type="submit">
                                        Test for Disease
                                    </button>
                                </div>
                            </form>
                            {prediction && (
                                <>
                                    <div className="flex flex-col gap-y-5">
                                        <h1 className="text-lg text-white font-semibold">Results:</h1>
                                        <p className='text-md text-white'>Predicted Disease: {prediction}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
}

export default Home;

