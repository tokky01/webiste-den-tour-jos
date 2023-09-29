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
                        <p>De zesde editie van den tour van Jos werd dit jaar georganiseerd door de Scouts van
                            Nederokkerzeel. Hopenlijk hebben jullie er allemaal even hard van genoten als wij!</p>
                    </div>
                    <div className={"my-5 "}>
                        <h2 className={"text-white bg-joslightblue w-fit  text-2xl"}>Resultaten</h2>
                       <p>Benieuwd naar de resultaten? Ga naar de site van SportU, ga naar resultaten en selecteer de juiste categorie.</p>
                        <h2 className={"text-white bg-josyellow w-fit  text-2xl"}>T-shirts</h2>
                        <p>Dit jaar zullen er geen t-shirts van Den Tour van Jos beschikbaar zijn.</p>
                    </div>
                    <div className={"my-5 "}>
                        <h2 className={"text-white bg-joslightorange w-fit  text-2xl"}>Foto&apos;s</h2>
                        <p>Graag nog eens terugblikken naar de jogging? De foto&apos;s staan online op onze Facebook-pagina! </p>
                    </div>
                    <div className={"my-5"}>
                        <h2 className={"text-white bg-josorange w-fit  text-2xl"}>Seingevers gezocht!</h2>
                        <p>Volgend jaar liever niet meelopen, maar wil je ons toch helpen? Dat kan altijd door seingever te zijn!</p> 
                    
                    
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
