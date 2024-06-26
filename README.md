# SkinSight-API
Bangkit Capstone Project
![alt text](https://github.com/rfqgal/SkinSight-API/blob/00e7b524f90da5e145caa3f0116a5f1f0b85e927/src/asset/gcp.jpg)

# Overview
Cloud Computing is responsible for managing the flow of applications to the database. To manage all this, we need an API that we create using Node JS Hapi and then deploy through Cloud Run.

# Architecture

![alt text](https://github.com/rfqgal/SkinSight-API/blob/00e7b524f90da5e145caa3f0116a5f1f0b85e927/src/asset/Arsitektur%20Cloud%20Computing%20Capstone.jpg)

The Architecture overview of the SkinSight application encompasses the entire process from utilizing Node.js Haip to generate endpoints, while seamlessly integrating with Google Cloud Platform

# Endpoint
## Base URL: https://skinsight-api-bvph3lxx3q-et.a.run.app  
### BRANCH: /api
This is the source code for the endpoints available in our GitHub repository for further exploration. There are API source codes such as AUTH, USER, HISTORY, and REPORT API source codes  
**AUTH:**
- POST Register user
/register

- POST Login user
/login

**USER:**
- GET user profile
/user

**Products:**
- GET all articles /catalogs


# Deploy 

![alt text](https://github.com/rfqgal/SkinSight-API/blob/00e7b524f90da5e145caa3f0116a5f1f0b85e927/src/asset/cloud-run.png)
Built using the Hapi framework, the API deployed using Cloud Run, and retrieving data from a database deployed using Firestore.

# Tool
- VS Code
- Postman
- Node js
- Hapi.js
- Google Cloud Platform
- Github

# Timeline
## Stage 1: Preparation for API Creation
In the first stage we prepare the things needed in making rest api, starting fromnNode js , postman, etc. to asking the MD what contract api is needed and claiming GCP dollars from Bangkit to deploy later. 

## Stage 2: Temporary API Creation
At this stage we try to create a temporary API according to what has been requested by the MD team. as for some of the stages as follows:
1. Create a temporary api that can be run locally using port 8080.  
2. After completing the creation, we tried it on postman.
3. After trying it for the register and login section, it has run well, but the others still need adjustments.
4. After knowing there are some that need adjustments, we reported it to the team, especially to the MD team and they provided some adjustments as well.
5. Then we made a new one and can run on local.

## Stage 3: Configuration with Firestore and Cloud Storage Buckets
After creating local-only, we then made adjustments so that it could be configured with firestore as our database repository. We had a little trouble configuring it at first, but after communicating with Advisor, we were able to get it done. After that, we also configured the cloud storage bucket that will store photos for user profiles and cow scan photos from the app later.

## Stage 4: Upload to Github
After the creation is complete, we start to upload to the github repository that was created earlier. This is useful for deploying later in the cloud run.

## Stage 5: Deploy Cloud Run
After all the preparations had been completed, we then deployed the rest api that we had created earlier using cloud run. After deploying, the base URL has been obtained and can be used by the MD team.

## Stage 6: Adjustment and Monitoring
After the deployment is complete, we then make adjustments, starting from the presence of wrong endpoints, leaked data and other adjustments needed by the application. Finally, we monitor whether it is running properly.
