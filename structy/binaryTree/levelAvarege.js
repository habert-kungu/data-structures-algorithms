
const levelAvarage  = (root)=>{
  const level = []
  const queue =   ({node: root , levelNum: 0} ) 
   while (queue.length > 0 ) {
    let ({node, levelNum}) = queue.shift()
    if(level.length === levelNum ){
       level[levelNum] = [node.val]
    }else{
  for(char of level){

  }
      level[levelNum].push(node.val)

    }


    if(node.left !== null )queue.push({node:node.left , levelNum:levelNum + 1})
    if(node.right!== null )queue.push({node:node.rigth, levelNum:levelNum + 1})
  }
  return level 

}
//  3
// //    /    \
// //   11     4
// //  / \      \
// // 4   -2     1
//
// levelAverages(a); // -> [ 3, 7.5, 1 ]
