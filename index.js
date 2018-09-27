$(function() {
    // Symbol
    let x = "x"
    let o = "o"

    let count = 0
    let o_win = 0
    let x_win = 0

    // Declare Tiles Class
    class Tiles {
      constructor(element){
        this.element=element
      }

      getClass(){
        if (this.element.hasClass('o')) return 'o'
        else if (this.element.hasClass('x')) return 'x'
        else return 'default'
      }
    }

    

    // Button
    let gameLists = $('#game li')
    let reset = $("#reset")
    // Tiles
    let one =  new Tiles($("#one"))
    let two = new Tiles ($("#two"))
    let three = new Tiles ($("#three"))
    let four = new Tiles($("#four"))
    let five = new Tiles ($("#five"))
    let six = new Tiles ($("#six"))
    let seven = new Tiles ($("#seven"))
    let eight = new Tiles ($("#eight"))
    let nine = new Tiles ($("#nine"))

    resetBoard = () => {
      gameLists.text("+");
      gameLists.removeClass('disable o x btn-primary btn-info')
      count = 0
    }


    checkWinner = () => {

    let winState = 
    [
      [one,two,three],
      [four,five,six],
      [seven,eight,nine],
      [one,four,seven],
      [two,five,eight],
      [three,six,nine],
      [one,five,nine],
      [three,five,seven]
    ]

    let result =  winState.filter( item => {
      return (
      item[0].getClass()===('x') && 
      item[1].getClass()===('x') && 
      item[2].getClass()===('x') ||
      item[0].getClass()===('o') && 
      item[1].getClass()===('o') && 
      item[2].getClass()===('o'))
    })

      if(result.length>0) 
      {
        let decidedWinner=result[0][0].getClass()
        if (decidedWinner==='o')
        {
          o_win++
          $('#o_win').text(o_win)
        } 
        else {
          x_win++
          $('#x_win').text(x_win)
        }
        count = 0
        alert(`${result[0][0].getClass()} Win!!!`)
        
        return decidedWinner
      } 
      
    }
    
    gameLists.click(function(){

     if (count == 9)
      {
        alert('Its a tie. It will restart.')
        resetBoard()
        
      }
    else if ($(this).hasClass('disable'))
      {
        alert('Already selected')
      }
    else if (count%2 == 0)
      {
        count++
        $(this).text(o)
        $(this).addClass('disable o btn-primary')
        if (checkWinner()==='o') resetBoard()
          
      }
    else  
      {
        count++
        $(this).text(x)
        $(this).addClass('disable x btn-info')
        if (checkWinner()==='x') resetBoard()
      }
    
    })
        
    reset.click(()=> resetBoard())
      
  })