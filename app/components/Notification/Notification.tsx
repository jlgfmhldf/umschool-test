import * as React from 'react'
import { ForwardRefRenderFunction } from 'react'
import { StyleSheet, Text, Animated } from 'react-native'
import { window } from '../../constants/layout'

export type NotificationProps = {
  title: string
  text: string
}

export type NotificationMethods = {
  show(): void
  hide(): void
}

const INITIAL_TOP = -window.height
const VISIBLE_TOP = 20
const DURATION = 500

const Notification: ForwardRefRenderFunction<NotificationMethods, NotificationProps> = (
  { title, text },
  ref,
) => {
  const topValue = React.useRef(new Animated.Value(INITIAL_TOP))

  const show = () => {
    Animated.timing(topValue.current, {
      toValue: VISIBLE_TOP,
      duration: DURATION,
      useNativeDriver: false,
    }).start()

    const timeout = setTimeout(() => {
      hide()
      clearTimeout(timeout)
    }, 2000)
  }

  const hide = () => {
    Animated.timing(topValue.current, {
      toValue: INITIAL_TOP,
      duration: DURATION,
      useNativeDriver: false,
    }).start()
  }

  React.useImperativeHandle(ref, () => ({
    show,
    hide,
  }))

  return (
    <Animated.View style={StyleSheet.flatten([styles.container, { top: topValue.current }])}>
      {!!title && <Text style={styles.title}>{title}</Text>}

      {!!text && <Text style={styles.text}>{text}</Text>}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 10,
    left: 10,
    width: window.width - 20,
    backgroundColor: 'rgb(56,56,56)',
    borderRadius: 10,
    padding: 20,
    maxHeight: window.height,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
})

export default React.memo(React.forwardRef(Notification))
