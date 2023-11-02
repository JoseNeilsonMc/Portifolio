import * as grid from "./grid.js";
import * as findPatterns from "./findPatterns.js";
import * as crossword from "./crossword.js";


const scriptsInEvents = {

	async Escreencontroller_Event46_Act2(runtime, localVars)
	{
		const { postMessage } = localVars;
		
		window.top.postMessage('KOLAB__DO_NOT_USE__EXIT_ACTIVITY', "*");
	},

	async Epanviewer_Event11_Act9(runtime, localVars)
	{
		window.viewer.initialize(localVars.width, localVars.height, localVars.leftOffset, localVars.topOffset);
		runtime.globalVars.PanViewer_isInitialized = true;
		runtime.globalVars.PanViewer_isTouchEnabled = true;
	},

	async Epanviewer_Event13_Act2(runtime, localVars)
	{
		if (!runtime.globalVars.PanViewer_isInitialized) {
			runtime.callFunction("PanViewer.Initialize");
		}
		
		const imageUrl = await runtime.assets.getProjectFileUrl(localVars.url);
		window.viewer.setImage(imageUrl);
	},

	async Epanviewer_Event15_Act1(runtime, localVars)
	{
		window.viewer.destroy();
	},

	async Epanviewer_Event21_Act5(runtime, localVars)
	{
		const marker = runtime.getInstanceByUid(localVars.uid);
		const children = [];
		for (const child of marker.children()) {
			children.push(child.uid);
		}
		localVars.childrenUIDs = children.join(',');
		localVars.numChildren = children.length;
	},

	async Epanviewer_Event25_Act1(runtime, localVars)
	{
		const sprite = runtime.getInstanceByUid(localVars.uid);
		
		for (const child of sprite.allChildren()) {
			child.isVisible = true;
		}
		
	},

	async Epanviewer_Event30_Act1(runtime, localVars)
	{
		const sprite = runtime.getInstanceByUid(localVars.uid);
		
		for (const child of sprite.allChildren()) {
			child.isVisible = false;
		}
		
	},

	async Epanviewer_Event38_Act1(runtime, localVars)
	{
		window.viewer.moveHorizontal(localVars.increment);
		if (!localVars.skipRender) {
			window.viewer.instance.render();
		}
		
	},

	async Epanviewer_Event40_Act1(runtime, localVars)
	{
		window.viewer.setHorizontalAngle(localVars.valueInRadians);
		if (!localVars.skipRender) {
			window.viewer.instance.render();
		}
		
	},

	async Epanviewer_Event42_Act1(runtime, localVars)
	{
		window.viewer.moveVertical(localVars.increment);
		if (!localVars.skipRender) {
			window.viewer.instance.render();
		}
		
	},

	async Epanviewer_Event44_Act1(runtime, localVars)
	{
		window.viewer.setVerticalAngle(localVars.valueInRadians);
		if (!localVars.skipRender) {
			window.viewer.instance.render();
		}
		
	},

	async Epanviewer_Event46_Act1(runtime, localVars)
	{
		window.viewer.setFOV(localVars.fov);
	},

	async Epanviewer_Event48_Act1(runtime, localVars)
	{
		const {x, y, z} = localVars;
		const screenPoint = window.viewer.getSphereToScreenPoint(x, y, z);
		return runtime.setReturnValue(screenPoint.x);
	},

	async Epanviewer_Event50_Act1(runtime, localVars)
	{
		const {x, y, z} = localVars;
		const screenPoint = window.viewer.getSphereToScreenPoint(x, y, z);
		return runtime.setReturnValue(screenPoint.y);
	},

	async Epanviewer_Event52_Act1(runtime, localVars)
	{
		const {x, y, z} = localVars;
		const screenPoint = window.viewer.getSphereToScreenPoint(x, y, z);
		return runtime.setReturnValue(JSON.stringify(screenPoint));
	},

	async Epanviewer_Event54_Act1(runtime, localVars)
	{
		const {x, y} = localVars;
		const spherePoint = window.viewer.getScreenToSpherePoint(x, y);
		return runtime.setReturnValue(spherePoint.x);
	},

	async Epanviewer_Event56_Act1(runtime, localVars)
	{
		const {x, y} = localVars;
		const spherePoint = window.viewer.getScreenToSpherePoint(x, y);
		return runtime.setReturnValue(spherePoint.y);
	},

	async Epanviewer_Event58_Act1(runtime, localVars)
	{
		const {x, y} = localVars;
		const spherePoint = window.viewer.getScreenToSpherePoint(x, y);
		return runtime.setReturnValue(spherePoint.z);
	},

	async Epanviewer_Event60_Act1(runtime, localVars)
	{
		const {x, y} = localVars;
		const spherePoint = window.viewer.getScreenToSpherePoint(x, y);
		return runtime.setReturnValue(JSON.stringify(spherePoint));
	},

	async Eloading_Event8_Act1(runtime, localVars)
	{
		console.log = function() {}
	},

	async Eloading_Event32_Act1(runtime, localVars)
	{
		window.resizeTo(
		    540,
		    960
		  );
	},

	async Ecustomstory_Event97_Act1(runtime, localVars)
	{
		const child = runtime.getInstanceByUid(localVars.childUID);
		const options = {
			transformX: true,
			transformY: true,
			transformAngle: true
		};
		const marker = runtime.objects.PanMarker.getFirstPickedInstance();
		marker.addChild(child, options);
		
		if (child instanceof ITextInstance && child.horizontalAlign === 'center') {
			child.x -= child.width / 2;
			child.y -= child.height / 2;
		}
	},

	async Ecustomstory_Event102_Act1(runtime, localVars)
	{
		const child = runtime.getInstanceByUid(localVars.childUID);
		const options = {
			transformX: true,
			transformY: true,
			transformAngle: true
		};
		const marker = runtime.objects.PanMarker.getFirstPickedInstance();
		marker.addChild(child, options);
		
		if (child instanceof ITextInstance && child.horizontalAlign === 'center') {
			child.x -= child.width / 2;
			child.y -= child.height / 2;
		}
	},

	async Eeditormode_Event319_Act5(runtime, localVars)
	{
		const { cellWidth, cellHeight, xMargin, yMargin, xOrigin, yOrigin } = localVars;
		const viewportWidth = localVars.viewportW;
		const viewportHeight = localVars.viewportH;
		
		grid.setGrid(cellWidth, cellHeight, xMargin, yMargin, xOrigin, yOrigin, viewportWidth, viewportHeight);
	},

	async Eeditormode_Event321_Act1(runtime, localVars)
	{
		const object = runtime.getInstanceByUid(localVars.objectUID);
		const { x, y } = object;
		
		const gridPoint = grid.getGridSnapPoint(x, y);
		
		object.x = gridPoint.x;
		object.y = gridPoint.y;
		
		// if (object instanceof ITextInstance && object.horizontalAlign === 'center') {
		// 	object.x -= object.width / 2;
		// 	object.y -= object.height / 2;
		// }
	},

	async Eeditormode_Event324_Act1(runtime, localVars)
	{
		localVars.pointsAmount = grid.getPointsAmount();
	},

	async Eeditormode_Event326_Act2(runtime, localVars)
	{
		const index = localVars.index;
		const point = grid.getPointByIndex(index);
		
		localVars.x = point.x;
		localVars.y = point.y;
	},

	async Eeditormode_Event328_Act1(runtime, localVars)
	{
		localVars.verticalLines = grid.getAxisValues("x").length;
		localVars.horizontalLines = grid.getAxisValues("y").length
		
	},

	async Eeditormode_Event330_Act2(runtime, localVars)
	{
		const index = localVars.index;
		const value = grid.getUniqueValueByIndex(index, "x");
		
		localVars.x = value;
	},

	async Eeditormode_Event333_Act2(runtime, localVars)
	{
		const index = localVars.index;
		const value = grid.getUniqueValueByIndex(index, "y");
		
		localVars.y = value;
	},

	async Eeditormode_Event342_Act3(runtime, localVars)
	{
		const object = runtime.getInstanceByUid(localVars.objectUID);
		const { xMouse, yMouse } = localVars;
		
		
		const snappedAxis = grid.snapObjectToAxis(object, { x: xMouse, y: yMouse });
	},

	async Eeditormode_Event354_Act3(runtime, localVars)
	{
		const object = runtime.getInstanceByUid(localVars.objectUID);
		const { xMouse, yMouse } = localVars;
		
		
		const snappedAxis = grid.snapObjectToAxis(object, { x: xMouse, y: yMouse }, false);
		if (snappedAxis.length) {
		    localVars.axis1 = snappedAxis[0].axis;
		    localVars.snappedAxisValue1 = snappedAxis[0].value;
		
		    if (snappedAxis.length > 1) {
		        localVars.axis2 = snappedAxis[1].axis;
		        localVars.snappedAxisValue2 = snappedAxis[1].value;
		    }
		}
		
	},

	async Eeditormode_Event360_Act4(runtime, localVars)
	{
		const object = runtime.getInstanceByUid(localVars.objectUID);
		const anchor = runtime.objects.GridAnchorPoint.getFirstInstance();
		const { xMouse, yMouse } = localVars;
		
		const { x, y } = grid.getObjectAnchorPoint(object, { x: xMouse, y: yMouse });
		anchor.x = x;
		anchor.y = y;
		
	},

	async Eeditormode_Event364_Act4(runtime, localVars)
	{
		const object = runtime.getInstanceByUid(localVars.objectUID);
		const anchor = runtime.objects.GridAnchorPoint.getFirstInstance();
		const { xMouse, yMouse } = localVars;
		
		const { x, y } = grid.getObjectAnchorPoint(object, { x: xMouse, y: yMouse });
		anchor.x = x;
		anchor.y = y;
		
	},

	async Epanoramicscreen_Event23_Act2(runtime, localVars)
	{
		const markers = runtime.objects.PanMarker.getAllInstances();
		const array = [];
		for (const [i, marker] of Object.entries(markers)) {
			array.push({
				component: "Marker",
				variation: "PanSprite",
				tags: marker.instVars.tags.split(','),
				id: i,
				data: {
					sphereX: marker.instVars.sphereX,
					sphereY: marker.instVars.sphereY,
					sphereZ: marker.instVars.sphereZ,
					isPanEnabled: true,
					setChildrenVisible: true,
					hideMarker: true
				},
				children: []
			});
		}
		console.log("-----MARKERS ARRAY------");
		console.log(JSON.stringify(array))
	},

	async Ecrossword_Event148_Act1(runtime, localVars)
	{
		const gameJson = crossword.createGameJson(localVars.selectedWords, localVars.seedProvided, runtime);
		
		runtime.setReturnValue(JSON.stringify(gameJson));
	},

	async Ecrossword_Event194_Act1(runtime, localVars)
	{
		if (localVars.wordIndex > -1) {
		  let filledWordsIndexesArray = [];
		
		  if (localVars.wordIndexesAlreadyFilled !== "") {
		    filledWordsIndexesArray = localVars.wordIndexesAlreadyFilled.split(
		      ","
		    );
		
		    filledWordsIndexesArray = filledWordsIndexesArray.map(
		      value => parseInt(value)
		    );
		  }
		
		  filledWordsIndexesArray.push(localVars.wordIndex);
		    
		  filledWordsIndexesArray = [...new Set(filledWordsIndexesArray)];
		  
		  localVars.wordIndexesAlreadyFilled = filledWordsIndexesArray.toString();
		}
	},

	async Ecrossword_Event283_Act1(runtime, localVars)
	{
		localVars.keyLetter = localVars.stringKeysvalues.split(',')[localVars.loopindexValue]+"";
	},

	async Ecrossword_Event340_Act1(runtime, localVars)
	{
		const alphabetArray = [
		  "A",
		  "B",
		  "C",
		  "D",
		  "E",
		  "F",
		  "G",
		  "H",
		  "I",
		  "J",
		  "L",
		  "M",
		  "N",
		  "O",
		  "P",
		  "Q",
		  "R",
		  "S",
		  "T",
		  "U",
		  "V",
		  "X",
		  "Z"
		];
		
		const wordsArray = runtime.objects.jCrossWord
		  .getFirstInstance()
		  .getJsonDataCopy().positionObjArr;
		
		const targetWordObj = wordsArray[localVars.wordIndex];
		
		let randomKeysArray = [];
		randomKeysArray = randomKeysArray.concat(targetWordObj.hiddenLetters);
		
		const keysToAddCount =
		  localVars.keyBoardButtonsCurrentCount - randomKeysArray.length;
		
		const shuffledAlphapet = crossword.utils_shuffleArrPermutationSeed(
		  [...alphabetArray],
		  randomKeysArray.length + "0-0" + keysToAddCount
		);
		
		for (
		  let i = 0;
		  randomKeysArray.length < localVars.keyBoardButtonsCurrentCount;
		  i++
		) {
		  if (randomKeysArray.indexOf(shuffledAlphapet[i]) === -1) {
		    randomKeysArray.push(shuffledAlphapet[i]);
		  }
		}
		
		randomKeysArray = crossword.utils_shuffleArrPermutationSeed(
		  [...randomKeysArray],
		  randomKeysArray.length + "0-0" + keysToAddCount
		);
		
		const blankSpacesDiff = localVars.maxHelps - localVars.helpCountAvailable;
		
		const shuffledIndexes = runtime
		  .callFunction(
		    "CrossWord_GeneratePermutationTable",
		    randomKeysArray.length,
		    targetWordObj.word
		  )
		  .split(",");
		
		let removedCount = 0;
		for (
		  let i = 0;
		  i < shuffledIndexes.length && removedCount < blankSpacesDiff;
		  i++
		) {
		  const j = shuffledIndexes[i];
		  if (targetWordObj.hiddenLetters.indexOf(randomKeysArray[j]) === -1) {
		    randomKeysArray[j] = ".";
		    removedCount++;
		  }
		}
		
		for (let i = 0; i < randomKeysArray.length; i++) {
		  if (randomKeysArray[i] !== ".") {
		    randomKeysArray[i] = "[b]" + randomKeysArray[i] + "[/b]";
		  }
		}
		
		runtime.setReturnValue(randomKeysArray.toString());
		
	},

	async Ecrossword_Event374_Act1(runtime, localVars)
	{
		const crossWordJson = runtime.objects.jCrossWord.getFirstInstance().getJsonDataCopy();
		
		const correctWord = crossWordJson.positionObjArr[localVars.wordIndex].word;
		
		for (let i = 0; i < correctWord.length && localVars.result === 1; i++) {
		  if (correctWord[i] !== localVars.inputWord[i]) {
		    localVars.result = 0;
		  }
		}
		
	},

	async Ecrossword_Event398(runtime, localVars)
	{
		const CELL_TWEEN_INTERVAL = localVars.TWEEN_CELL_INTERVAL_TIME;
		const SHINNY_MASK_PASS_TIME = localVars.TWEEN_SHINNY_MASK_PASS_TIME;
		
		const allCells = [...runtime.objects.CrossWord_Cell.getAllInstances()];
		
		const jCrossWord = runtime.objects.jCrossWord
		  .getFirstInstance()
		  .getJsonDataCopy();
		
		const { crossWordObj } = jCrossWord;
		
		const cellsWithDegree = arrangeCellsByNeighbor(
		  undefined,
		  allCells[0],
		  0,
		  []
		).sort((nodeA, nodeB) => {
		  if (nodeA.degree > nodeB.degree) {
		    return 1;
		  } else if (nodeA.degree < nodeB.degree) {
		    return -1;
		  }
		
		  return 0;
		});
		
		const cellsByDegree = new Array(
		  cellsWithDegree[cellsWithDegree.length - 1].degree + 1
		).fill([]);
		for (let i = 0; i < cellsByDegree.length; i++) {
		  const cellsOfDegree = cellsWithDegree
		    .filter(({ degree }) => degree === i)
		    .map(node => node.cell);
		  cellsByDegree[i] = cellsByDegree[i].concat(...cellsOfDegree);
		}
		
		allCells.forEach(cell => {
		  const cellTween = cell
		    .getOtherContainerInstances()
		    .find(instance => instance.objectType.name === "CrossWord_CellTweenColor");
		
		  cellTween.opacity = 0;
		  cellTween.setAnimation("fill", "beginning");
		});
		
		const cellShinyMask = runtime.objects.CrossWord_ShinnyMask.getFirstInstance();
		const cellsStroke = [...runtime.objects.CrossWord_CellStroke.getAllInstances()];
		const shinyLayer = runtime.layout.getLayer("Shinny");
		doTweens(cellsByDegree, cellShinyMask);
		
		async function doTweens(cells, shinnyMask) {
		  await doCellsTween(cells);
		  cellsStroke.forEach(cellStroke =>{
		    cellStroke.moveToLayer(shinyLayer);
		    cellStroke.moveToBottom();
		  });
		
		  const { Tween } = shinnyMask.behaviors;
		  const options = {
		  	tags: "lastTween"
		  };
		  const tween = Tween.startTween(
		    "position",
		    [1065, 1320],
		    SHINNY_MASK_PASS_TIME,
		    "linear",
			options
		  );
		}
		
		/**
		 * DO A TWEEN OVER A COLLECTION OF CELL ASYNCHRONOUSLY
		 * @param cellsCollection COLLECTION OF CELLS TO DO TWEEN
		 */
		async function doCellsTween(cellsCollection) {
		  for (const cells of cellsCollection) {
		    const cellsToUpdate = [];
		    let tween;
		    for (const cell of cells) {
		      const cellTween = cell
		        .getOtherContainerInstances()
		        .find(
		          instance => instance.objectType.name === "CrossWord_CellTweenColor"
		        );
		
		      const { Tween } = cellTween.behaviors;
		      // const { Tween } = cell.behaviors;
		
		      const tweenOpts = {
		        pingPong: true
		      };
		      tween = Tween.startTween(
		        "opacity",
		        1,
		        CELL_TWEEN_INTERVAL,
		        "linear",
		        tweenOpts
		      );
		      cellsToUpdate.push(cell);
		    }
		    await waitForSeconds(CELL_TWEEN_INTERVAL / 2);
		
		    // SET THE STYLE THE CELL TO STATIC WHEN THE CELL IS FULLY COVERED
		    cellsToUpdate.forEach(cell => {
		      cell.instVars.cellStyle = "staticCellStyle";
		      runtime.callFunction("CrossWord_SetCellState", cell.uid, "default");
		    });
		  }
		}
		
		function waitForSeconds(seconds) {
		  // I DO NOT CONSIDER THE TIMEOUT WILL GIVE AN ERROR
		  return new Promise(resolve => {
		    setTimeout(() => {
		      resolve("Show Time");
		    }, seconds * 1000);
		  });
		}
		
		/**
		 * RECURSIVE FUNCTION TO ARRANGE CELLS BY CONNECTION ORDER
		 * @param lastCell THE CELL FROM THE LAST ITERATION
		 * @param currentCell THE CURRENT CELL BEING PROCESSED
		 * @param degree THE CURRENT DEGREE. STARTS WITH ZERO, AND GOES UNTIL REACHES THE CELL WITHOUT ANY REPEATED CONNECTION
		 * @param array THE ARRAY OF CELLS BY CONNECTIONS ORDER
		 * @returns
		 */
		function arrangeCellsByNeighbor(lastCell, currentCell, degree, array) {
		  // DEBUGG ONLY. PREVENTS INFINITE CALL
		  if (array.length > allCells.length) {
		    return array;
		  }
		
		  lastCell = lastCell === undefined ? { uid: -1 } : lastCell;
		
		  if (currentCell === undefined) {
		    return array;
		  }
		
		  array.push({ cell: currentCell, degree });
		
		  // TOP CELL
		  const topRow = currentCell.instVars.row - 1;
		  const inBoundsTop = topRow >= 0;
		  // INSIDE THE BOUNDS?
		  const topCell = inBoundsTop
		    ? // THIS CAN RETURN UNDEFINED TOO, ONCE THIS POSITION MAYBE DOESN'T HAVE A CELL
		      allCells.find(
		        cell =>
		          topRow === cell.instVars.row &&
		          currentCell.instVars.column === cell.instVars.column
		      )
		    : // IF IT IS NOT JUST RETURN UNDEFINED
		      undefined;
		  if (topCell && topCell.uid !== lastCell.uid) {
		    arrangeCellsByNeighbor(currentCell, topCell, degree + 1, array);
		  }
		
		  // RIGHT CELL
		  const rightColumn = currentCell.instVars.column + 1;
		  const inBoundsRight = rightColumn < crossWordObj[0].length;
		  // INSIDE THE BOUNDS?
		  const rightCell = inBoundsRight
		    ? // THIS CAN RETURN UNDEFINED TOO, ONCE THIS POSITION MAYBE DOESN'T HAVE A CELL
		      allCells.find(
		        cell =>
		          currentCell.instVars.row === cell.instVars.row &&
		          rightColumn === cell.instVars.column
		      )
		    : // IF IT IS NOT JUST RETURN UNDEFINED
		      undefined;
		  if (rightCell && rightCell.uid !== lastCell.uid) {
		    arrangeCellsByNeighbor(currentCell, rightCell, degree + 1, array);
		  }
		
		  // BOTTOM CELL
		  const bottomRow = currentCell.instVars.row + 1;
		  const inBoundsBottom = bottomRow < crossWordObj.length;
		  // INSIDE THE BOUNDS?
		  const bottomCell = inBoundsBottom
		    ? // THIS CAN RETURN UNDEFINED TOO, ONCE THIS POSITION MAYBE DOESN'T HAVE A CELL
		      allCells.find(
		        cell =>
		          bottomRow === cell.instVars.row &&
		          currentCell.instVars.column === cell.instVars.column
		      )
		    : // IF IT IS NOT JUST RETURN UNDEFINED
		      undefined;
		  if (bottomCell && bottomCell.uid !== lastCell.uid) {
		    arrangeCellsByNeighbor(currentCell, bottomCell, degree + 1, array);
		  }
		
		  // LEFT CELL
		  const leftColumn = currentCell.instVars.column - 1;
		  const inBoundsLeft = leftColumn >= 0;
		  // INSIDE THE BOUNDS?
		  const leftCell = inBoundsLeft
		    ? // THIS CAN RETURN UNDEFINED TOO, ONCE THIS POSITION MAYBE DOESN'T HAVE A CELL
		      allCells.find(
		        cell =>
		          currentCell.instVars.row === cell.instVars.row &&
		          leftColumn === cell.instVars.column
		      )
		    : // IF IT IS NOT JUST RETURN UNDEFINED
		      undefined;
		  if (leftCell && leftCell.uid !== lastCell.uid) {
		    arrangeCellsByNeighbor(currentCell, leftCell, degree + 1, array);
		  }
		
		  return lastCell, undefined, degree, array;
		}
		
	},

	async Efindpatterns_Event56_Act1(runtime, localVars)
	{
		const patternTile = runtime.objects.PatternTile.getFirstPickedInstance();
		
		const x = patternTile.instVars.xIndex;
		const y = patternTile.instVars.yIndex;
		
		const state = findPatterns.getTileStateAt({ x, y });
		localVars.state = state;
		
		patternTile.instVars.state = state;
	},

	async Efindpatterns_Event58_Act1(runtime, localVars)
	{
		const patternTile = runtime.objects.PatternTile.getFirstPickedInstance();
		
		const x = patternTile.instVars.xIndex;
		const y = patternTile.instVars.yIndex;
		
		const state = localVars.state;
		
		findPatterns.setTileStateAt({ x, y, state });
	},

	async Efindpatterns_Event61_Act3(runtime, localVars)
	{
		const patternTile = runtime.objects.PatternTile.getFirstPickedInstance();
		
		const x = patternTile.instVars.xIndex;
		const y = patternTile.instVars.yIndex;
		
		localVars.isCorrect = +findPatterns.isInputCorrect(x, y);
	},

	async Efindpatterns_Event62_Act9(runtime, localVars)
	{
		const patternTile = runtime.objects.PatternTile.getFirstPickedInstance();
		
		const x = patternTile.instVars.xIndex;
		const y = patternTile.instVars.yIndex;
		
		findPatterns.setLastInput(x, y);
	},

	async Efindpatterns_Event64_Act1(runtime, localVars)
	{
		localVars.correctTilesAmount = findPatterns.getCorrectTilesAmount();
	},

	async Efindpatterns_Event68_Act3(runtime, localVars)
	{
		findPatterns.resetMatrix();
	},

	async Efindpatterns_Event70_Act2(runtime, localVars)
	{
		localVars.isComplete = +findPatterns.isComplete();
	},

	async Efindpatterns_Event85_Act1(runtime, localVars)
	{
		const { ruleName, size } = localVars;
		
		findPatterns.createGame(size, ruleName);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

