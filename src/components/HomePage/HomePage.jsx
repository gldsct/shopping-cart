import styles from "./HomePage.module.css";
import heroFirstFemaleModel from "../../assets/models/woman-1.jpg";
import heroSecondFemaleModel from "../../assets/models/woman-2.jpg";
import heroThirdFemaleModel from "../../assets/models/woman-3.jpg";
import scrollFirstFemaleModel from "../../assets/models/woman-4.jpg";
import scrollSecondFemaleModel from "../../assets/models/woman-5.jpg";
import scrollThirdFemaleModel from "../../assets/models/woman-6.jpg";
import scrollFourthFemaleModel from "../../assets/models/woman-7.jpg";
import scrollFifthFemaleModel from "../../assets/models/woman-8.jpg";

function HomePage () {
    return (
        <>
            <section className = {styles["hero-section"]}>
                <div className = {styles["hero-main-headline"]}>
                    <h2 className = {styles["hero-header"]}>ELEVATE YOUR ELEGANT FASHION</h2>

                    <figure>
                        <img src = {heroFirstFemaleModel} alt = "Adult woman with curly hair, wearing an orange coat" width = {1280} height = {853} className = {styles["model-one-image"]} />
                        <figcaption>Luxury born from intention, worn with confidence</figcaption>
                    </figure>
                </div>

                <div className = {styles["hero-secondary-headline"]}>
                    <div className = {styles["left-panel"]}>
                        <div className = {styles["left-panel-header"]}>
                            <div className = {styles["dash-separator"]}></div>
                            <p>Since 1978</p>
                        </div>

                        <p className = {styles["left-panel-text"]}>Redefining contemporary fashion through minimal elegant silhouettes</p>

                        <button className = {styles["action-call-button"]}> <span aria-hidden = "true" className = {styles["shop-separator"]}>∗</span> <span>SHOP NOW</span></button>
                    </div>

                    <div className = {styles["model-two-wrapper"]}>
                        <img src = {heroSecondFemaleModel} alt = "Woman wearing a layered turtleneck sweater with a maroon blazer, carrying multiple shopping bags" width = {1920} height = {1080} className = {styles["model-two-image"]} />
                    </div>

                    <div className = {styles["right-panel"]}>
                        <p>Each creation tells a story of grace, confidence and artistry</p>

                        <figure>
                            <img src = {heroThirdFemaleModel} alt = "Woman wearing a layered turtleneck sweater with a black blazer, with her face partially covered by her hair" width = {1280} height = {720} className = {styles["model-three-image"]} />
                            <figcaption>Luxury redefined for a new generation of taste</figcaption>
                        </figure>
                    </div>

                </div>
            </section>

            <section className = {styles["content-section"]}>
                <h3>Designed for the Moments that Matter</h3>

                <div className = {styles["scrollbar"]}>
                    <figure className = {styles["scrollbar-item"]}>
                        <img src = {scrollFirstFemaleModel} alt = "Woman wearing an orange puffer jacket, smiling at the camera" width = {1280} height = {889} className = {styles["scrollbar-image"]} />
                        <figcaption>Fashion written in poetry, not trends</figcaption>
                    </figure>

                    <figure className = {styles["scrollbar-item"]}>
                        <img src = {scrollSecondFemaleModel} alt = "Black-and-white portrait of an adult woman wearing a halter top, looking at the camera" width = {1280} height = {853} className = {styles["scrollbar-image"]} />
                        <figcaption>Designed for moments that linger</figcaption>
                    </figure>
                    
                    <figure className = {styles["scrollbar-item"]}>
                        <img src = {scrollThirdFemaleModel} alt = "Woman with long, flowing blonde hair, looking upwards and to the right, among trees with vibrant red leaves" width = {1280} height = {720} className = {styles["scrollbar-image"]} />
                        <figcaption>Each piece a quiet statement of power</figcaption>
                    </figure>

                    <figure className = {styles["scrollbar-item"]}>
                        <img src = {scrollFourthFemaleModel} alt = "Woman in a white dress with flowers in her hair, smiling while sitting in a soft, sunlit field" width = {1280} height = {720} className = {styles["scrollbar-image"]} />
                        <figcaption>Where artistry meets the art of dressing</figcaption>
                    </figure>

                    <figure className = {styles["scrollbar-item"]}>
                        <img src = {scrollFifthFemaleModel} alt = "Young woman in a ponytail with sunlight gently striking her face, leaning on a railing while gazing sideways" width = {1280} height = {720} className = {styles["scrollbar-image"]} />
                        <figcaption>Elegance distilled into every seam</figcaption>
                    </figure>
                </div>
            </section>

            <section className = {styles["discount-info"]}>
                <p>NEW YEAR DISCOUNT * EXTRA OFF ON ALL PRODUCTS * NEW YEAR DISCOUNT * EXTRA OFF ON ALL PRODUCTS * NEW YEAR DISCOUNT</p>
            </section>
        </>
    );
}

export { HomePage };