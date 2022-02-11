import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Notification, { NotificationMethods } from './app/components/Notification/Notification'

const firstPushProps = {
  title: 'Привет, я пуш-уведомление 😅',
  text: 'Желаю хорошего дня ',
}

const secondPushProps = {
  title: 'Привет, я большой жирный пуш!! 👿',
  text: 'Разнообразный и богатый опыт консультация с широким активом влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. Таким образом рамки и место обучения кадров требуют определения и уточнения дальнейших направлений развития. Задача организации, в особенности же укрепление и развитие структуры влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. Задача организации, в особенности же сложившаяся структура организации представляет собой интересный эксперимент проверки дальнейших направлений развития. Равным образом укрепление и развитие структуры позволяет выполнять важные задания по разработке новых предложений. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий.',
}

export default function App() {
  const firstNotification = React.useRef<NotificationMethods>(null)
  const secondNotification = React.useRef<NotificationMethods>(null)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      firstNotification.current?.show()
      clearTimeout(timeout)
    }, 1000)

    const timeout2 = setTimeout(() => {
      secondNotification.current?.show()
      clearTimeout(timeout2)
    }, 5000)
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.tsx to start working on your app!</Text>

      <Notification {...firstPushProps} ref={firstNotification} />
      <Notification {...secondPushProps} ref={secondNotification} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
