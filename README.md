This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Application tracker
<img width="1270" alt="image" src="https://github.com/PhiThai1309/application-tracker/assets/71892904/54e7cfbc-5829-483e-af0f-d01cf73d7ac4">

## Table of contents
- [Overview](#Overview)
- [Functionalities](#Functionalities)
- [How to run](#How-to-run)
- [Screenshot](#Screenshot)
- [Built with](#Built-with)
- [Author](#author)

## Overview
Welcome to Application Tracker! This project aims to simplify the process of managing job applications by providing a user-friendly interface to track the status of applications submitted to various companies. 

> [!NOTE]
> This application can be hosted locally or deployed using CI/CD pipelines. For detailed instructions on how to run it, please refer to the [How to run](#How-to-run) section.

## Functionalities
- **Effortless Tracking**: Easily input details of your job applications, including company name, position applied for, submission date, and current status.
  
- **Intuitive Interface**: Navigate through your applications with ease, thanks to a clean and intuitive user interface designed for efficiency.

- **Status Updates**: Keep track of the progress of each application, from submission to interview to offer, ensuring you never miss an opportunity or forget to follow up.

| Status           | Value | Color     |
|------------------|-------|-----------|
| New              | 1     | ![#A3C9AA](https://via.placeholder.com/15/A3C9AA/000000?text=+) #A3C9AA   |
| Processing       | 2     | ![#FFD93D](https://via.placeholder.com/15/FFD93D/000000?text=+) #FFD93D   |
| Follow Up Email  | 3     | ![#DAC0A3](https://via.placeholder.com/15/DAC0A3/000000?text=+) #DAC0A3   |
| Interview        | 4     | ![#FF9800](https://via.placeholder.com/15/FF9800/000000?text=+) #FF9800   |
| Not Response     | 5     | ![#D09CFA](https://via.placeholder.com/15/D09CFA/000000?text=+) #D09CFA   |
| Fail             | 6     | ![#FE6244](https://via.placeholder.com/15/FE6244/000000?text=+) #FE6244   |

- CI/CD: Continuous Integration and Continuous Deployment pipelines are set up to automate deployment processes. http://23.22.173.20:8081/  

- **More features in the future**:  Additional functionalities and improvements are planned for future updates.


## How to run
- [Localhost](#For-Front-end-using-localhost)
- [CI/CD](#For-Front-end-using-CI/CD)

### For Back-end:
Please run Backend first before running the Frontend [Link](https://github.com/PhiThai1309/ApplicationTrackerBackend)

### For Front-end using localhost:
1. Ensure the back-end application is running on 'http://localhost:3000/'

2. Clone project from Github repository (on the main branch): 
```
clone https://github.com/PhiThai1309/application-tracker
```

> [!NOTE]
> For simplicity, you can access to this page without cloning the project: https://application-tracker-sandy.vercel.app/

3. Install required packages:
```
npm install
```
4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Run the application:
Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.


### For Front-end using CI/CD:
Please access to this link for the full application: http://23.22.173.20:8081/  


## Screenshot

### Add new application
<img width="1270" alt="image" src="https://github.com/PhiThai1309/application-tracker/assets/71892904/e48b4214-cd65-490e-8bc7-54846a37eb23">

### Edit application
<img width="1270" alt="image" src="https://github.com/PhiThai1309/application-tracker/assets/71892904/b25f221a-d2e8-41c9-af77-2aabec3e645a">

## Built with
Application Tracker is built using the MERN stack:
<p align="center">
  <img src="https://skillicons.dev/icons?i=js" />
  <img src="https://skillicons.dev/icons?i=css">
  <img src="https://skillicons.dev/icons?i=nextjs">
  <img src="https://skillicons.dev/icons?i=ts">
  <img src="https://skillicons.dev/icons?i=express" />
  <img src="https://skillicons.dev/icons?i=nodejs" />
  <img src="https://skillicons.dev/icons?i=mongodb">
  <img src="https://skillicons.dev/icons?i=vscode">
</p>

-	Frontend: NextJS, Typescript
-	Backend: MongoDB, NodeJS, ExpressJS, Mongoose
-	CI/CD: AWS EC2, AWS SSM, Docker, Jenkins, Github hooks
-	Github & Git


## Author
Thai Manh Phi

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


