import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const SwipeIt = ({ hero }) => {
<<<<<<< HEAD
<<<<<<< HEAD
    const { title, description, backgroundImage, buttonText } = hero;
    return (
        <div className='-z-50'>
            <section
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
                }}
=======
    console.log(hero.backgroundImage);
=======
>>>>>>> a700365 (update hero section,)
    const { title, description, backgroundImage, buttonText } = hero;
    return (
        <div>
            <section
<<<<<<< HEAD
                style={{ backgroundImage: `url(${backgroundImage})` }}
>>>>>>> 02aa898 (hero section done)
=======
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
                }}
>>>>>>> a700365 (update hero section,)
                className="relative bg-cover bg-center bg-no-repeat"
            >

                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
<<<<<<< HEAD
<<<<<<< HEAD
                        <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
=======
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
>>>>>>> 02aa898 (hero section done)
=======
                        <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
>>>>>>> a700365 (update hero section,)
                            {title}

                            {/* <strong className="block font-extrabold text-rose-700"> Forever Home. </strong> */}
                        </h1>

<<<<<<< HEAD
<<<<<<< HEAD
                        <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
=======
                        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
>>>>>>> 02aa898 (hero section done)
=======
                        <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
>>>>>>> a700365 (update hero section,)
                            {description}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link
                                to={'/dashboard'}
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                {buttonText}
                            </Link>

                            <button
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SwipeIt;
SwipeIt.propTypes = {
    hero: PropTypes.object,
}