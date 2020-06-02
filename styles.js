import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    margin:5,
  },
  button: {
    margin: 10,
  },
});

export default styles;
