import React from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'
class Login extends React.Component {
    render() {
        return (
                <Form>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Form.Field>
                                    <label>Username</label>
                                    <input placeholder='Username' />
                                </Form.Field>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Form.Field>
                                    <label>Password</label>
                                    <input placeholder='Password' type="password"/>
                                </Form.Field>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered={false}>
                            <Grid.Column width={6}>
                                <Button primary type='submit'>Submit</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Form>

        )
    }
}

export default Login
