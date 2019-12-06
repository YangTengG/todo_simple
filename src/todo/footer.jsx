import '../assets/styles/footer.styl'

export default {
  data() {
    return {
      author: '大王'
    }
  },
  render() {
    return (
      <div class="footer">
        <span>Writen by { this.author }</span>
      </div>
    )
  }
}
