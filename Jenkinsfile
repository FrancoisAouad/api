pipeline {
    agent any 
   environment {
        DISABLE_AUTH = 'true'
        DB_ENGINE    = 'sqlite'
    }
    stages {
        stage('Building app...') { 
            steps { 
                echo 'make $(DISABLE_AUTH)' 
            }
        }
        stage('Running test cases...') { 
            steps { 
                echo 'make' 
            }
        }
        stage('Deploying application...') {
            steps {
                echo 'make publish'
            }
        }
    }
}
