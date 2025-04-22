pipeline {
    agent any
    
    enviroment {
        NODE_ENV = 'development'
    }

    stages {
        stage('install npm') {
            steps {
                echo 'NPM installing'
                bat 'npm install'
            }
        }
        
        stage('running test') {
            steps {
                echo 'running test'
                bat 'npm test'
            }
        }
    }
    
    post {
        success {
            echo 'finished project test'
        }
        
        failure {
            echo 'did not finish for some reason'
        }
    }
}
