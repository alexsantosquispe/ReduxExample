import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F5F5FF'
  },
  header: {
    height: 50,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  container: {
    justifyContent: 'space-around',
    padding: 8
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  card: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    margin: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 3
  },
  cardTitle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444'
  },
  cardValue: {
    alignSelf: 'center',
    padding: 8,
    color: '#333',
    fontSize: 70
  },
  iconButton: {
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: '#0084FF',
    justifyContent: 'center',
    marginHorizontal: 8,
    width: 36,
    height: 36
  },
  genderIcon: {
    alignSelf: 'center',
    margin: 16
  },
  cardSelected: {
    borderWidth: 4,
    borderColor: '#0084FF'
  },
  customButton: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0084FF',
    padding: 12,
    margin: 8,
    borderRadius: 16
  },
  customButtonLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8
  }
});
