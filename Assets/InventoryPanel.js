#pragma strict

var visible : boolean = false;
var graham : GameObject;
var star : GameObject;
var inventory : Inventory;


function Start () 
{

Debug.Log(this.GetType);
this.GetComponent.<CanvasRenderer>().SetAlpha(0);
}

function Update () {

}


function inventoryButton ()
{
	visible = !visible;
	if (false.Equals(visible))
	{
	this.GetComponent.<CanvasRenderer>().SetAlpha(0);
	}
	else if (true.Equals(visible))
	{
	this.GetComponent.<CanvasRenderer>().SetAlpha(1);
	graham = GameObject.Find("Graham");
	inventory = graham.GetComponent.<Inventory>();
	if (inventory.getStar() != null)
		{
		star = inventory.getStar();
		star.active = true;
		}
	}
}