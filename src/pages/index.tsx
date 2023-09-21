import {Inter} from 'next/font/google'
import {SocialIcon} from "react-social-icons";


export default function Home() {
    return (
        <>
            <header className={"flex px-24 md:mx-6"}>
                <img src={"/assets/logo.png"} className={"w-1/4 rotate-12"} alt={"logo"}/>
                <img src={"/assets/title.png"} className={"w-2/3 h-full "} alt={"logo"}/>
            </header>
            <div className={"pl-40 sm:mr-8 flex  flex-col justify-center  "}>
                <div className={"flex flex-col  my-24 font-barlow justify-center text-xl"}>
                    <div className={"my-5"}>
                        <h1 className={"text-white bg-josblue w-fit text-2xl"}>Den tour 2023</h1>
                        <p>De zesde editie van den tour van Jos wordt dit jaar georganiseerd door de Scouts van
                            Nederokkerzeel. Maar ook dit jaar zullen we er een top-jogging van maken!</p>
                    </div>
                    <div className={"my-5"}>
                        <h2 className={"text-white bg-joslightblue w-fit  text-2xl"}>Inschrijvingen</h2>
                        <p> Heb je je nog niet ingeschreven maar wil je toch meelopen? Dat kan! Zondag zelf kan je je nog inschrijven op locatie. Tot dan! </p>
                        <p>Je kan kiezen tussen de kidstour (500 m), de korte tour (7 km) en de lange tour (11 km).</p>
                    </div>
                    <div className={"my-5"}>
                        <h2 className={"text-white bg-josyellow w-fit  text-2xl"}>T-shirts</h2>
                        <p>Dit jaar zullen er geen t-shirts van Den Tour van Jos beschikbaar zijn.</p>
                    </div>
                    <div className={"my-5 "}>
                        <h2 className={"text-white bg-joslightorange w-fit  text-2xl"}>Foto&apos;s</h2>
                        <p>Graag nog eens terugblikken naar de jogging van vorig jaar?</p>
                        <p><a className={"font-bold underline"} href={"https://www.facebook.com/tourvanjos/photos/"}>Bekijk
                            de foto&apos;s via onze Facebook.</a></p>
                    </div>
                    <div className={"my-5"}>
                        <h2 className={"text-white bg-josorange w-fit  text-2xl"}>Seingevers gezocht!</h2>
                        <p>Loop je niet graag mee, maar wil je ons toch helpen? Dan is seingever zijn het perfecte alternatief!</p> 
                          <p>Stuur een berichtje naar 0473 22 98 01 voor verdere afspraken!</p>
                    
                    </div>
                </div>
            </div>
            <footer className={"bg-josorange "}>
                <div className={"flex items-center justify-center h-60 text-white"}>
                    <p className={"text-4xl m-10"}>Nog een vraag?</p>
                    <div className={"flex flex-col font-thin m-10"}>
                        <p><a href={"mailto:joggingnederokkerzeel@gmail.com"}>joggingnederokkerzeel@gmail.com</a></p>
                        <p><a href={"tel:+32 473 22 98 01"}>+32 473 22 98 01</a></p>
                    </div>
                    <div className={"flex flex-col font-thin m-10"}>
                        <SocialIcon url={"https://www.facebook.com/tourvanjos"} fgColor={"white"}
                                    bgColor={"transparent"} style={{height: 50, width: 50}}/>
                        <SocialIcon url={"https://www.instagram.com/joggingnederokkerzeel/"} fgColor={"white"}
                                    bgColor={"transparent"} style={{height: 50, width: 50}}/>
                    </div>
                </div>

            </footer>
        </>
    )
}
