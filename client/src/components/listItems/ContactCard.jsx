import { Card } from 'antd'
import React, { useState } from 'react'

import { EditOutlined } from '@ant-design/icons'
import RemoveContact from '../buttons/RemoveContact'
import UpdateContact from '../forms/UpdateContact'

const getStyles = () => ({
  card: {
    width: '500px'
  }
})

const ContactCard = props => {
  const [id] = useState(props.id)
  const [firstName, setFirstName] = useState(props.firstName)
  const [lastName, setLastName] = useState(props.lastName)
  const styles = getStyles()

  const [editMode, setEditMode] = useState(false)

  const handleButtonClick = () => {
    setEditMode(!editMode)
  }

  const updateStateVariable = (variable, value) => {
    switch (variable) {
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      default:
        break
    }
  }

  return (
    <div>
    {editMode ? (
      <UpdateContact
      id={id}
      firstName={firstName}
      lastName={lastName}
      onButtonClick={handleButtonClick}
      updateStateVariable={updateStateVariable}
      />
    ) : (
      <Card
      style={styles.card}
      actions={[
        <EditOutlined key='edit' onClick={handleButtonClick} />,
        <RemoveContact id={id} />
      ]}>
        {firstName} {lastName}
      </Card>
    )}
    </div>
  )
}

export default ContactCard