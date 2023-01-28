pipeline {
    agent any 
    environment {

    }
    stages {
        stage('Building Docker image and Container...') { 
            steps { 
                echo 'make' 
            }
        }
        stage('Running test cases...') { 
            steps { 
                echo 'make' 
            }
        }
        stage('Pushing artifacts to nexus3...'){
            steps {
                echo 'make check'
               
            }
        }
        stage('Deploying application...') {
            steps {
                echo 'make publish'
            }
        }
    }
}
