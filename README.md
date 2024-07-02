# Avson Hotel & Room Service

-[Avson Hotel & Room Service](https://assignment-11-fb88e.web.app)

OverView: <br /> <br />
Avson Hotel & Room Service is a comprehensive hotel management system designed to facilitate easy room availability checking and booking. Users can select their desired room and specify their preferred dates and times, with flexible cancellation options available.


Technologies Used:

-Front End : React, Tailwind CSS
-Back End : ExpressJs, NodeJs
-Data Base : MongoDB



Features:

1. Users can book their favourite hotel room for a specific time range.
2. They can login to the system using Email/Password Authentication or via Google Authentication.
3. They can post reviews, comment, rating about their hotel experience.
4. Users can update their booking time as they want.
5. Users can search rooms by Price Filter range.
6. Rooms booked by one users, will be disabled for booking to others. 



Resources:

- [React Router Dom](https://reactrouter.com/en/main)
- [React Hot Toast](https://react-hot-toast.com/)
- [Swiper Slider](https://swiperjs.com/react)
- [React Hook Form](https://swiperjs.com/react)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Lottie React](https://lottiereact.com/)
- [Daisy UI](https://daisyui.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Momentjs](https://momentjs.com/)
- [Sweet Alert 2](https://sweetalert2.github.io/)
- [Axios](https://axios-http.com/)
- [react-datepicker](https://reactdatepicker.com/)
- [react-helmet-async](https://www.npmjs.com/package/react-helmet-async)
- [react-rating-stars-component](https://www.npmjs.com/package/react-rating-stars-component)
- [leaflet](https://leafletjs.com/)
- [AOS](https://michalsnik.github.io/aos/)


  ## How to Clone and Run

1. **Clone Repositories**
   - Clone both repositories to your computer:
     ```bash
     git clone https://github.com/Md-Rashedul-Islam-Rajib/Avson-Hotel-Clients
     git clone https://github.com/Md-Rashedul-Islam-Rajib/Avson-Hotel_server
     ```

2. **Configure Firebase Credentials**
   - Replace your Firebase credentials and other necessary environment variables in `.env.local` file in the clients repository.

3. **Configure MongoDB Credentials**
   - Replace your MongoDB username, password, and other necessary environment variables in `.env` file in the server repository.
   - Add your localhost URL to CORS in `index.js` file in the server repository.

4. **Install Dependencies**
   - Open both the clients and server repository folders in the command line interface (CLI).
   - Install necessary npm packages by running:
     ```bash
     npm install
     ```

5. **Start the Server**
   - Navigate to the server repository folder and start the server using nodemon:
     ```bash
     cd Avson-Hotel-Server
     nodemon index.js
     ```

6. **Start the Client**
   - Navigate to the clients repository folder and start the client development server:
     ```bash
     cd Avson-Hotel-Clients
     npm run dev
     ```
