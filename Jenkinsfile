pipeline {
    agent any 
   environment {
        DISABLE_AUTH = 'true'
        DB_ENGINE    = 'sqlite'
    }
    stages {
        stage('Building Docker image and Container...') { 
            steps { 
                echo 'make $(DISABLE_AUTH)' 
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
