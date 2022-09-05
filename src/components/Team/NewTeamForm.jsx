import React from 'react'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { firebaseApp } from '../../App'
import { useTeams } from '../../contexts/teamContext'

const NewTeamForm = props => {
  const [teams, setTeams] = useTeams()
  var db = getFirestore(firebaseApp)

  const renderLevels = () => {
    const levels = [1, 2, 3, 4, 5, 6]
    return levels.map(level => {
      return (
        <option key={level} value={level}>
          {level}
        </option>
      )
    })
  }

  const add = async values => {
    try {
      const docRef = await addDoc(collection(db, 'teams'), {
        name: values.name,
        level: values.level,
      })
      // add snackbar message and loader
      setTeams([...teams, {id: docRef.id, name: values.name, level: values.level }])
      console.log('Document written with ID:  ', docRef.id)
    } catch (e) {
      // add errormessage in snackbar
      console.error('Error adding document: ', e)
    }
  }

  return (
    <div className="team-form-container">
      <Formik
        initialValues={{ name: '', level: 1 }}
        onSubmit={values => add(values)}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .min(3, 'Joukkueen nimi tulee olla vähintään 3 kirjainta.')
            .required('Kenttä on pakollinen'),
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Joukkueen nimi</label>
              <input
                id="name"
                placeholder="Lisää joukkueen nimi"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.name && touched.name
                    ? 'text-input error'
                    : 'text-input'
                }
              />
              <label htmlFor="level">Joukkueen level</label>
              <Field name="level" as="select" className="my-select">
                {renderLevels()}
              </Field>
              <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Tyhjennä
              </button>
              <button type="submit" disabled={isSubmitting}>
                Tallenna
              </button>
            </form>
          )
        }}
      </Formik>
    </div>
  )
}

export default NewTeamForm
