<h2>1396. Design Underground System</h2><h3>Medium</h3><hr><div><p>Implement the <code>UndergroundSystem</code> class:</p>

<ul>
	<li><code>void checkIn(int id, string stationName, int t)</code>

	<ul>
		<li>A customer with a card id equal to <code>id</code>, gets in the station <code>stationName</code> at time <code>t</code>.</li>
		<li>A customer can only be checked into one place at a time.</li>
	</ul>
	</li>
	<li><code>void checkOut(int id, string stationName, int t)</code>
	<ul>
		<li>A customer with a card id equal to <code>id</code>, gets out from the station <code>stationName</code> at time <code>t</code>.</li>
	</ul>
	</li>
	<li><code>double getAverageTime(string startStation, string endStation)</code>
	<ul>
		<li>Returns the average time to travel between the <code>startStation</code> and the <code>endStation</code>.</li>
		<li>The average time is computed from all the previous traveling from <code>startStation</code> to <code>endStation</code> that happened <strong>directly</strong>.</li>
		<li>Call to <code>getAverageTime</code> is always valid.</li>
	</ul>
	</li>
</ul>

<p>You can assume all calls to <code>checkIn</code> and <code>checkOut</code> methods are consistent. If a customer gets in at time <strong>t<sub>1</sub></strong> at some station, they get out at time <strong>t<sub>2</sub></strong> with <strong>t<sub>2</sub> &gt; t<sub>1</sub></strong>. All events happen in chronological order.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input</strong>
["UndergroundSystem","checkIn","checkIn","checkIn","checkOut","checkOut","checkOut","getAverageTime","getAverageTime","checkIn","getAverageTime","checkOut","getAverageTime"]
[[],[45,"Leyton",3],[32,"Paradise",8],[27,"Leyton",10],[45,"Waterloo",15],[27,"Waterloo",20],[32,"Cambridge",22],["Paradise","Cambridge"],["Leyton","Waterloo"],[10,"Leyton",24],["Leyton","Waterloo"],[10,"Waterloo",38],["Leyton","Waterloo"]]

<strong>Output</strong>
[null,null,null,null,null,null,null,14.00000,11.00000,null,11.00000,null,12.00000]

<strong>Explanation</strong>
UndergroundSystem undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(45, "Leyton", 3);
undergroundSystem.checkIn(32, "Paradise", 8);
undergroundSystem.checkIn(27, "Leyton", 10);
undergroundSystem.checkOut(45, "Waterloo", 15);
undergroundSystem.checkOut(27, "Waterloo", 20);
undergroundSystem.checkOut(32, "Cambridge", 22);
undergroundSystem.getAverageTime("Paradise", "Cambridge"); &nbsp; &nbsp; &nbsp; // return 14.00000. There was only one travel from "Paradise" (at time 8) to "Cambridge" (at time 22)
undergroundSystem.getAverageTime("Leyton", "Waterloo"); &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;// return 11.00000. There were two travels from "Leyton" to "Waterloo", a customer with id=45 from time=3 to time=15 and a customer with id=27 from time=10 to time=20. So the average time is ( (15-3) + (20-10) ) / 2 = 11.00000
undergroundSystem.checkIn(10, "Leyton", 24);
undergroundSystem.getAverageTime("Leyton", "Waterloo"); &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;// return 11.00000
undergroundSystem.checkOut(10, "Waterloo", 38);
undergroundSystem.getAverageTime("Leyton", "Waterloo"); &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;// return 12.00000
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input</strong>
["UndergroundSystem","checkIn","checkOut","getAverageTime","checkIn","checkOut","getAverageTime","checkIn","checkOut","getAverageTime"]
[[],[10,"Leyton",3],[10,"Paradise",8],["Leyton","Paradise"],[5,"Leyton",10],[5,"Paradise",16],["Leyton","Paradise"],[2,"Leyton",21],[2,"Paradise",30],["Leyton","Paradise"]]

<strong>Output</strong>
[null,null,null,5.00000,null,null,5.50000,null,null,6.66667]

<strong>Explanation</strong>
UndergroundSystem undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(10, "Leyton", 3);
undergroundSystem.checkOut(10, "Paradise", 8);
undergroundSystem.getAverageTime("Leyton", "Paradise"); // return 5.00000
undergroundSystem.checkIn(5, "Leyton", 10);
undergroundSystem.checkOut(5, "Paradise", 16);
undergroundSystem.getAverageTime("Leyton", "Paradise"); // return 5.50000
undergroundSystem.checkIn(2, "Leyton", 21);
undergroundSystem.checkOut(2, "Paradise", 30);
undergroundSystem.getAverageTime("Leyton", "Paradise"); // return 6.66667
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>There will be at most <code>20000</code> operations.</li>
	<li><code>1 &lt;= id, t &lt;= 10<sup>6</sup></code></li>
	<li>All strings consist of uppercase and lowercase English letters, and digits.</li>
	<li><code>1 &lt;= stationName.length &lt;= 10</code></li>
	<li>Answers within <code>10<sup>-5</sup></code> of the actual value will be accepted as correct.</li>
</ul>
</div>