import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Project from './Project'
import Sidebar from './Sidebar'

const Container = styled.div`
background: white
display: flex`

const Container2 = styled.div`
background: white
display: flex
flex-wrap: wrap
justify-content: flex-start
`

const SideBar2 = styled.div`
min-height: 100vh
height: auto
background: #c2dde6
min-width: 300px
display: flex
flex-direction: column
align-items: center
justify-content: space-between`





export default class Dash extends React.Component {
    constructor() {
        super()
        this.state = {
            tasks: [],
            projects: [],
            allLists: false
        }
        this.getTasks = this.getTasks.bind(this)
        this.allListsTrue = this.allListsTrue.bind(this)
        this.allListsFalse = this.allListsFalse.bind(this)
        this.getProjects = this.getProjects.bind(this)
    }


    //INITIAL RENDER--------------------------------------------------------------------------
    componentDidMount() {
        const userID = localStorage.getItem('userID')
        this.getProjects(userID)
        this.getTasks(userID)
    }

    getTasks(userID) {
        axios.get(`/api/tasks/${userID}`)
            .then(res => {
                this.setState({
                    tasks: res.data
                })
            })
    }

    getProjects() {

        if (!this.state.allLists) {
            const id = localStorage.getItem('userID')
            axios.get(`/api/projects/${id}`)
                .then(res => {
                    this.setState({
                        projects: res.data
                    })
                })
        }
        if (this.state.allLists) {
            axios.get('/api/projects').then(res => {
                this.setState({
                    projects: res.data
                })
            })
        }
    }
    allListsTrue() {
        this.setState({
            allLists: true
        })
    }
    allListsFalse() {
        this.setState({
            allLists: false
        })
    }



    render() {
        return (
            <Container>
                <Sidebar
                    allListsTrue={this.allListsTrue}
                    allListsFalse={this.allListsFalse}
                    getProjects={this.getProjects}
                />
                <SideBar2 />

                {(this.state.projects.length > 0) &&
                    <Container2>


                        {this.state.projects.map((projectID, index) => {
                            const project = this.state.projects[index]

                            const tasks = this.state.tasks.map((taskId, index) => this.state.tasks[index])
                            return <Project 
                            key={project.project_id}
                                project={project}
                                tasks={tasks}
                                addButton={this.addButton}
                                getTasks={this.getTasks}
                                allLists={this.state.allLists}
                                getProjects={this.getProjects}
                            />
                        })}

                    </Container2>}

            </Container>

        )
    }
}